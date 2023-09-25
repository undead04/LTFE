import * as React from "react";
import { useState, useEffect, ImgHTMLAttributes } from "react";
import { DetailedHTMLProps } from "react";
import api from "../../services/api";
type ImageAttribute = ImgHTMLAttributes<HTMLImageElement>;

interface ImageProps
	extends DetailedHTMLProps<ImageAttribute, HTMLImageElement> {
	size?: string;
	alt?: string;
	src?: string;
}

const Image = ({ size = "16x9", src, ...others }: ImageProps) => {
	return (
		<>
			<div className={`picture${size}`}>
				<div className="pt_lv1">
					<div className="pt_lv2">
						<div className="pt_wrapper">
							<img
								className="img-fluid img_css"
								alt=""
								src={`${api.url.baseUrl}${src}`}
								{...others}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Image;
