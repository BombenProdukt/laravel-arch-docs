import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Laravel Arch',
	description:
		'Describe your application architecture in a declarative manner, generate the code, and start right away.',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		editLink: {
			pattern:
				'https://github.com/faustbrian/laravel-arch-docs/edit/main/docs/:path',
			text: 'Edit this page on GitHub',
		},

		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Installation', link: '/installation' },
			{ text: 'Configuration', link: '/configuration' },
			{ text: 'Annotations', link: '/annotations' },
		],

		sidebar: [
			{
				text: 'Getting Started',
				items: [
					{ text: 'Installation', link: '/installation' },
					{ text: 'Configuration', link: '/configuration' },
				],
			},
			{
				text: 'Core Concepts',
				items: [
					{ text: 'Environment', link: '/core-concepts/environment' },
					{ text: 'Extension', link: '/core-concepts/extension' },
					{ text: 'Generator', link: '/core-concepts/generator' },
					{ text: 'Parser', link: '/core-concepts/parser' },
					{ text: 'Renderer', link: '/core-concepts/renderer' },
					{ text: 'Reporter', link: '/core-concepts/reporter' },
					{ text: 'Statement', link: '/core-concepts/statement' },
					{ text: 'Tokenizer', link: '/core-concepts/tokenizer' },
					{ text: 'Tree', link: '/core-concepts/tree' },
				],
			},
			{
				text: 'The Basics',
				items: [
					{
						text: 'Building Manifests',
						link: '/the-basics/building-manifests',
					},
					{
						text: 'Running Commands',
						link: '/the-basics/running-commands',
					},
				],
			},
			{
				text: 'Digging Deeper',
				items: [
					{
						text: 'Creating an Extension',
						link: '/digging-deeper/creating-an-extension',
					},
				],
			},
			{
				text: 'The Generators',
				items: [
					{ text: 'Casts', link: '/generators/casts' },
					{ text: 'Commands', link: '/generators/commands' },
					{ text: 'Controllers', link: '/generators/controllers' },
					{ text: 'Events', link: '/generators/events' },
					{ text: 'Factories', link: '/generators/factories' },
					{
						text: 'Form Requests',
						link: '/generators/form-requests',
					},
					{
						text: 'Global Scopes',
						link: '/generators/global-scopes',
					},
					{ text: 'Jobs', link: '/generators/jobs' },
					{ text: 'Livewire', link: '/generators/livewire' },
					{ text: 'Mails', link: '/generators/mails' },
					{ text: 'Middleware', link: '/generators/middleware' },
					{ text: 'Migrations', link: '/generators/migrations' },
					{ text: 'Models', link: '/generators/models' },
					{
						text: 'Notifications',
						link: '/generators/notifications',
					},
					{ text: 'Nova Actions', link: '/generators/nova/actions' },
					{
						text: 'Nova Dashboards',
						link: '/generators/nova/dashboards',
					},
					{ text: 'Nova Filters', link: '/generators/nova/filters' },
					{ text: 'Nova Lenses', link: '/generators/nova/lenses' },
					{ text: 'Nova Metrics', link: '/generators/nova/metrics' },
					{
						text: 'Nova Resources',
						link: '/generators/nova/resources',
					},
					{ text: 'Observers', link: '/generators/observers' },
					{ text: 'Pivots', link: '/generators/pivots' },
					{ text: 'Policies', link: '/generators/policies' },
					{ text: 'Resources', link: '/generators/resources' },
					{
						text: 'Resource Collections',
						link: '/generators/resource-collections',
					},
					{ text: 'Routes', link: '/generators/routes' },
					{ text: 'Rules', link: '/generators/rules' },
					{ text: 'Seeders', link: '/generators/seeders' },
					{
						text: 'Service Providers',
						link: '/generators/service-providers',
					},
					{ text: 'Views', link: '/generators/views' },
					{
						text: 'View Components',
						link: '/generators/view-components',
					},
					{
						text: 'View Composers',
						link: '/generators/view-composers',
					},
				],
			},
			{
				text: 'The Statements',
				items: [
					{
						text: 'Action Redirect',
						link: '/statements/action-redirect',
					},
					{ text: 'Authorize', link: '/statements/authorize' },
					{ text: 'Dispatch', link: '/statements/dispatch' },
					{ text: 'Eloquent', link: '/statements/eloquent' },
					{ text: 'Fire', link: '/statements/fire' },
					{
						text: 'Inertia Render',
						link: '/statements/inertia/render',
					},
					{ text: 'Mail', link: '/statements/mail' },
					{ text: 'Notification', link: '/statements/notification' },
					{ text: 'Notify', link: '/statements/notify' },
					{ text: 'Query', link: '/statements/query' },
					{ text: 'Resource', link: '/statements/resource' },
					{
						text: 'Resource Collection',
						link: '/statements/resource-collection',
					},
					{ text: 'Respond', link: '/statements/respond' },
					{
						text: 'Route Redirect',
						link: '/statements/route-redirect',
					},
					{ text: 'Session', link: '/statements/session' },
					{ text: 'Validate', link: '/statements/validate' },
					{ text: 'View', link: '/statements/view' },
				],
			},
		],

		socialLinks: [
			{
				icon: 'github',
				link: '/https://github.com/faustbrian/laravel-arch',
			},
		],

		search: {
			provider: 'local',
		},
	},
});
