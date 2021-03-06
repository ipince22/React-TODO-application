import React, { useState } from "react";

export function Home() {
	const [list, setList] = useState([]);
	const [content, setContent] = useState();

	return (
		<>
			<div className="text-center mt-5">
				<h1>List To Do</h1>
				<input
					key={"txt1"}
					value={content}
					onChange={e => {
						setContent(e.target.value.toLocaleUpperCase());
					}}
					onKeyPress={e => {
						if (e.key === "Enter") {
							if (content !== "") {
								setList(
									list.concat(content.toLocaleUpperCase())
								);
								setContent("");
							} else {
								alert("input one task");
							}
						}
					}}
				/>
				<button
					onClick={() => {
						if (content !== "") {
							setList(list.concat(content.toLocaleUpperCase()));
							setContent("");
						} else {
							alert("input one task");
						}
					}}>
					Add
				</button>
				{list.map((item, index) => {
					return (
						<div
							className="list-group-item list-group-item-action"
							key={index}
							onClick={() => {
								setList(
									list.filter(
										(itemf, indexf) => indexf !== index
									)
								);
							}}>
							{item}
						</div>
					);
				})}
				<br />
				<cite>{"Total de elemetos: " + list.length}</cite>
			</div>
		</>
	);
}
