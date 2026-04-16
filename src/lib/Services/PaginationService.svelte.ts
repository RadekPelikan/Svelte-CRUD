import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { page } from '$app/state';
import type { IModelService } from '$lib/types/Service';
import { LocalStorageKeys } from '../helpers/localStorageKeys';
import { isNumber, parseNumber } from '../helpers/number';


export class PaginationService<T> {
	#service: IModelService<T>;
	#items = $state<T[]>([]);
	#maxPages = $state(0);

	// Reactive derived from URL — updates automatically when goto() changes ?page=
	get current(): number {
		const pageQuery = page.url.searchParams.get('page');
		if (isNumber(pageQuery)) {
			return parseNumber(pageQuery);
		}
		if (browser) {
			return parseNumber(localStorage.getItem(LocalStorageKeys.PAGINATION_KEY));
		}
		return 0;
	}

	static async initAsync<T>(service: IModelService<T>) {
		const maxPages = await service.getMaxPages();
		return new PaginationService<T>(service, maxPages);
	}

	private constructor(service: IModelService<T>, maxPages: number) {
		this.#service = service;
		this.#maxPages = maxPages;

		$effect.root(() => {
			// Re-fetch items whenever current page (URL) changes
			$effect(() => {
				service.getPaged(this.current).then((items) => {
					this.#items = items;
				});
			});
			// Keep localStorage in sync
			$effect(() => {
				if (browser) {
					localStorage.setItem(LocalStorageKeys.PAGINATION_KEY, this.current + '');
				}
			});
		});
	}

	get maxPages() {
		return this.#maxPages;
	}

	get items() {
		return this.#items;
	}

	changePage(n: number) {
		goto(`?page=${n}`);
		// No manual state update needed — #current derives from the URL
	}

	handlePrevious() {
		this.changePage(Math.max(0, this.current - 1));
	}

	handleNext() {
		this.changePage(Math.min(this.maxPages, this.current + 1));
	}

	get pageNumbers() {
		const startCount = 1;
		const endCount = 1;
		const middleCount = 5;

		const start = Array(startCount).keys().toArray();
		const end = Array(endCount)
			.keys()
			.map((e) => this.maxPages - e)
			.toArray()
			.reverse()

		const maxStart =Math.max(...start);
		const minEnd = Math.min(...end)
		
		const middle = Array(middleCount)
				.keys()
				.map((n) => Math.floor(
					n + this.current - middleCount / 2 + 1
				
				))
				// cut the smallest
				.filter((p) => p > maxStart)
				// cut the biggest
				.filter((p) => p < minEnd)
				.toArray() as number[]

		return {
			isStart: start.length > 0,
			isMiddle: middle.length > 0,
			isEnd: end.length > 0,
			start,
			middle,
			end
		};

	}
}
