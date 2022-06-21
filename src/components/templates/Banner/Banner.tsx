import "./Banner.css";
export default function Banner(props: any) {
	const { heading, children } = props;
	return (
		<div className="banner-heading">
			<h2 className="heading-title">{heading}</h2>
			<div className="banner-data">{children}</div>
		</div>
	);
}
