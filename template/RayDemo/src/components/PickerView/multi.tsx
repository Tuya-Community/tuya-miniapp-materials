import React from "react";
import { PickerView, PickerViewColumn, View } from "@ray-js/components";

export default function () {
	const [current, setCurrent] = React.useState([0, 1]);

	const handlePickerChange = (e) => {
		console.log(e);
		setCurrent(e.value);
	};

	const range = [
		["巴西", "中国", "日本", "美国"],
		["橘子", "苹果", "香蕉", "西瓜"],
	];

	return (
		<PickerView onChange={handlePickerChange} value={current}>
			{range.map((column, columnIndex) => (
				<PickerViewColumn key={columnIndex}>
					{(column as string[]).map((item: string, index: number) => (
						<View
							key={index}
							style={{
								textAlign: "center",
								lineHeight: "36px",
							}}
						>
							{item}
						</View>
					))}
				</PickerViewColumn>
			))}
		</PickerView>
	);
}
