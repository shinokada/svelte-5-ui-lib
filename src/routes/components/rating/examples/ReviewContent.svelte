<script lang="ts">
	import { Review } from '$lib';
	import {
		LandmarkSolid,
		CalendarMonthSolid,
		UsersGroupOutline,
		ThumbsUpSolid,
		ThumbsDownSolid
	} from 'flowbite-svelte-icons';
	let review = {
		name: 'Jese Leos',
		imgSrc: '/images/profile-picture-2.webp',
		imgAlt: 'jese leos',
		address: 'United States',
		reviewDate: 'January 20, 2022',
		title: 'Spotless, good appliances, excellent layout, host was genuinely nice and helpful.',
		rating: 8.79,
		item1: 'Apartament with City View',
		item2: '3 nights December 2021',
		item3: 'Family'
	};
</script>

<Review {review}>
	<p class="mb-2 font-light text-gray-500 dark:text-gray-400">
		The flat was spotless, very comfortable, and the host was amazing. I highly recommend this
		accommodation for anyone visiting Brasov city centre. It's quite a while since we are no longer
		using hotel facilities but self contained places. And the main reason is poor cleanliness and
		staff not being trained properly. This place exceeded our expectation and will return for sure.
	</p>
	<p class="mb-5 font-light text-gray-500 dark:text-gray-400">
		It is obviously not the same build quality as those very expensive watches. But that is like
		comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.
	</p>
	{#snippet item1()}
		<div class="flex">
			<LandmarkSolid class="mr-2 h-5 w-5" />
			{review.item1}
		</div>
	{/snippet}
	{#snippet item2()}
		<div class="flex">
			<CalendarMonthSolid class="mr-2 h-5 w-5" />
			{review.item2}
		</div>
	{/snippet}
	{#snippet item3()}
		<div class="flex">
			<UsersGroupOutline class="mr-2 h-5 w-5" />
			{review.item3}
		</div>
	{/snippet}
	<aside class="mt-3 flex items-center space-x-5 rtl:space-x-reverse">
		<a
			href="/"
			class="text-primary-600 dark:text-primary-500 inline-flex items-center text-sm font-medium hover:underline"
		>
			<ThumbsUpSolid class="text-primary-600 dark:text-primary-500 me-2.5 h-3.5 w-3.5" />
			Helpful
		</a>
		<a
			href="/"
			class="group text-primary-600 dark:text-primary-500 inline-flex items-center text-sm font-medium hover:underline"
		>
			<ThumbsDownSolid class="text-primary-600 dark:text-primary-500 me-2.5 h-3.5 w-3.5" />
			Not helpful
		</a>
	</aside>
</Review>
