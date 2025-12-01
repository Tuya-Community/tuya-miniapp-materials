import React from "react";
import { PickerView, PickerViewColumn, View } from "@ray-js/components";

export default function () {
	const [current, setCurrent] = React.useState([0]);

	const handlePickerChange = (e) => {
		setCurrent(e.value);
	};

	const range = ["巴西", "中国", "日本", "美国"];

	return (
		<PickerView onChange={handlePickerChange} value={current}>
			<PickerViewColumn>
				{(range as string[]).map((item: string, index: number) => (
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
		</PickerView>
	);
}
