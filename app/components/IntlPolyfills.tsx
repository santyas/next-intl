import Script from 'next/script'

function IntlPolyfills() {

	const polyfills = [
		'Intl',
		'Intl.Locale',
		'Intl.DateTimeFormat',
		`Intl.DateTimeFormat.~locale.es`,
		`Intl.NumberFormat`,
		`Intl.NumberFormat.~locale.es`,
		'Intl.PluralRules',
		`Intl.PluralRules.~locale.es`,
		'Intl.RelativeTimeFormat',
		`Intl.RelativeTimeFormat.~locale.es`,
		'Intl.ListFormat',
		`Intl.ListFormat.~locale.es`
	];

	return (
		<Script
			src={
				'https://polyfill.io/v3/polyfill.min.js?features=' + polyfills.join(',')
			}
		/>
	);
}

export default IntlPolyfills