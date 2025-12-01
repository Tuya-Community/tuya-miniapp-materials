import React from "react";

import { View, Text } from "@ray-js/ray";
import { router } from "ray";
import clsx from "clsx";

import styles from "./index.module.less";

const NavPanel: React.FC<{
	sort?: boolean;
	title: string;
	list: { name: string; path?: string; action?: string; onClick?: () => void }[];
	onAction?: (actionName: string) => void;
}> = ({ title, list, sort = true, onAction }) => {
	return (
		<View className={styles.wrapper}>
			<Text className={styles.title}>{title}</Text>
			<View className={styles.listWrapper}>
				{list
					.sort((a, b) => {
						if (sort) {
							return a.name.localeCompare(b.name);
						}
						return 0;
					})
					.map(({ name, path = "", action, onClick }, index) => {
						return (
							<View
								key={path + index}
								className={clsx(
									styles.item,
									index === 0 && styles["first-child"]
								)}
								hoverClassName={styles.itemHover}
							onClick={() => {
								if (typeof onClick === "function") {
									onClick();
								} else if (action && onAction) {
									onAction(action);
								} else if (path) {
									router.push(path);
								}
							}}
							>
								<Text className={styles.itemName}>{name}</Text>
								<View className={styles.itemArrow}></View>
							</View>
						);
					})}
			</View>
		</View>
	);
};

export default NavPanel;
