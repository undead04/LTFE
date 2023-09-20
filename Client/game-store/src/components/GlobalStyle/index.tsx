import * as React from "react";
import { useState, useEffect, PropsWithChildren } from "react";
import { JsxElement } from "typescript";
import "./GlobalStyle.css";

const GlobalStyle = ({ children }: PropsWithChildren<any>) => {
	return children;
};

export default GlobalStyle;
