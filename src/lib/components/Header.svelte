<script lang="ts">
	import { DEFAULT_LANG, TEXTS } from '$lib/lang/texts';

	const links = [
		{
			text: TEXTS[DEFAULT_LANG].nav.home,
			href: '/'
		},
		{
			text: TEXTS[DEFAULT_LANG].nav.cars,
			href: '/car'
		},
		{
			text: TEXTS[DEFAULT_LANG].nav.phones,
			href: '/phone'
		},
		{
			text: TEXTS[DEFAULT_LANG].nav.laptops,
			href: '/laptop'
		},
		{
			text: TEXTS[DEFAULT_LANG].nav.watches,
			href: '/watch'
		}
	];
</script>

<header class="">
	<div class="container mx-auto h-full max-w-280">
		<nav class="h-20">
			<ul class="flex justify-between h-full">
				{#each links as link}
					<li class="h-full flex-1">
						<a
							class="grid h-full place-items-center bg-[#FFFFFF00] hover:bg-[#FFFFFF11]"
							href={link.href}
						>
							<p>{link.text}</p>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
</header>
