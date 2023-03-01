import { GlobalConfig } from 'payload/types';

const Home: GlobalConfig = {
	slug: 'home',
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'hero',
			type: 'group',
			fields: [
				{
					name: 'heading',
					type: 'text',
					required: true,
				},
				{
					name: 'image',
					type: 'upload',
					relationTo: 'media',
				},
			],
		},
		{
			name: 'highlight',
			type: 'group',
			fields: [
				{
					name: 'image',
					type: 'upload',
					relationTo: 'media',
				},
				{
					name: 'heading',
					type: 'text',
				},
				{
					name: 'content',
					type: 'textarea',
				},
			],
		},
		{
			name: 'testimonial',
			type: 'group',
			fields: [
				{
					name: 'quote',
					type: 'text',
				},
			],
		},
		{
			name: 'feature',
			type: 'group',
			fields: [
				{
					name: 'image',
					type: 'upload',
					relationTo: 'media',
				},
				{
					name: 'heading',
					type: 'text',
				},
				{
					name: 'content',
					type: 'textarea',
				},
			],
		},
		{
			name: 'additionalItems',
			type: 'group',
			fields: [
				{
					name: 'showPromoBar',
					type: 'checkbox',
					label: 'Show Promo Bar?',
      				defaultValue: false,
				},
				{
					name: 'promoBarText',
					type: 'text'
				},
			],
		},
	],
};
export default Home;
