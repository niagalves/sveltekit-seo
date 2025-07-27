<script lang="ts">
	import { page } from '$app/state';

	const { metatag }: Metatag = $props();
	let {
		title,
		description,
		keywords = [],
		author,
		canonical,
		follow = true,
		language = 'en',
		og,
		x,
		ldJson = {},
		custom
	} = metatag;

	const getLdJson = () => JSON.stringify(ldJson);
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="canonical" href={canonical || page.url.href} />
	<meta name="language" content={language} />
	<meta name="description" content={description} />

	{#if keywords.length}
		<meta name="keywords" content={keywords.join(', ')} />
	{/if}
	{#if author}
		<meta name="author" content={author} />
	{/if}

	<meta name="robots" content={follow ? 'index,follow' : 'noindex,nofollow'} />
	<meta name="url" content={page.url.href} />

	{#each custom ?? [] as tag}
		{#if tag.content}
			<meta {...tag.name ? { name: tag.name } : { property: tag.property }} content={tag.content} />
		{/if}
	{/each}

	<meta property="og:title" content={title} />
	<meta property="og:site_name" content={og.siteName} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:type" content={og.type} />
	<meta property="og:locale" content={language} />
	{#if og.fbAppId}
		<meta property="fb:app_id" content={og.fbAppId} />
	{/if}

	{#each og.image as image}
		{#if image.url}
			<meta property="og:image" content={image.url} />
		{/if}
		{#if image.secureUrl}
			<meta property="og:image:secure_url" content={image.secureUrl} />
		{/if}
		{#if image.type}
			<meta property="og:image:type" content={image.type} />
		{/if}
		{#if image.width}
			<meta property="og:image:width" content={image.width} />
		{/if}
		{#if image.height}
			<meta property="og:image:height" content={image.height} />
		{/if}
		{#if image.alt}
			<meta property="og:image:alt" content={image.alt} />
		{/if}
	{/each}

	{#each og.video ?? [] as video}
		{#if video.url}
			<meta property="og:video" content={video.url} />
			<meta property="og:video:url" content={video.url} />
		{/if}
		{#if video.secureUrl}
			<meta property="og:video:secure_url" content={video.secureUrl} />
		{/if}
		{#if video.type}
			<meta property="og:video:type" content={video.type} />
		{/if}
		{#if video.width}
			<meta property="og:video:width" content={video.width} />
		{/if}
		{#if video.height}
			<meta property="og:video:height" content={video.height} />
		{/if}
	{/each}

	{#each og.audio ?? [] as audio}
		{#if audio.url}
			<meta property="og:audio" content={audio.url} />
		{/if}
		{#if audio.secureUrl}
			<meta property="og:audio:secure_url" content={audio.secureUrl} />
		{/if}
		{#if audio.type}
			<meta property="og:audio:type" content={audio.type} />
		{/if}
	{/each}

	<meta name="twitter:description" content={description} />
	<meta name="twitter:title" content={title} />
	{#if x?.siteId}
		<meta name="twitter:site:id" content={x.siteId} />
	{/if}
	{#if x?.site}
		<meta name="twitter:site" content={x.site} />
	{/if}
	{#if x?.creatorId}
		<meta name="twitter:creator:id" content={x.creatorId} />
	{/if}
	{#if x?.creator}
		<meta name="twitter:creator" content={x.creator} />
	{/if}
	{#if x?.card}
		<meta name="twitter:card" content={x.card} />
	{/if}

	{#each x?.image ?? [] as image}
		{#if image.url}
			<meta name="twitter:image" content={image.url} />
		{/if}
		{#if image.alt}
			<meta name="twitter:image:alt" content={image.alt} />
		{/if}
	{/each}

	{#each x?.player ?? [] as player}
		{#if player.url}
			<meta name="twitter:player" content={player.url} />
		{/if}
		{#if player.width}
			<meta name="twitter:player:width" content={player.width} />
		{/if}
		{#if player.height}
			<meta name="twitter:player:height" content={player.height} />
		{/if}
		{#if player.stream}
			<meta name="twitter:player:stream" content={player.stream} />
		{/if}
	{/each}

	{#if ldJson}
		{@html `<script type="application/ld+json">${getLdJson()}</script>`}
	{/if}
</svelte:head>
