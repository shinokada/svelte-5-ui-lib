<script lang="ts">
	import { CheckboxButton, ButtonGroup } from '$lib';
	import { AppleSolid, FacebookSolid, DiscordSolid, DropboxSolid } from 'flowbite-svelte-icons';
</script>

<div class="mb-4 space-y-2">
	<CheckboxButton><AppleSolid class="me-2 h-6 w-6" />Apple</CheckboxButton>
	<CheckboxButton><FacebookSolid class="me-2 h-6 w-6" />Facebook</CheckboxButton>
	<CheckboxButton><DiscordSolid class="me-2 h-6 w-6" />Discord</CheckboxButton>
	<CheckboxButton><DropboxSolid class="me-2 h-6 w-6" />Dropbox</CheckboxButton>
</div>

<ButtonGroup>
	<CheckboxButton><AppleSolid class="me-2 h-6 w-6" />Apple</CheckboxButton>
	<CheckboxButton><FacebookSolid class="me-2 h-6 w-6" />Facebook</CheckboxButton>
	<CheckboxButton><DiscordSolid class="me-2 h-6 w-6" />Discord</CheckboxButton>
	<CheckboxButton class="hidden sm:inline-flex"
		><DropboxSolid class="me-2 h-6 w-6" />Dropbox</CheckboxButton
	>
</ButtonGroup>
