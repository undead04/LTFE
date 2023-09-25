import clsx from "clsx";
import * as React from "react";

const SideBanner = ({ children }: React.PropsWithChildren) => {
	return (
		<>
			<div className={clsx("col-md-3 d-none d-md-block")}>
				{children}
			</div>
		</>
	);
};

export default SideBanner;
