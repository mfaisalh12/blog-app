import React, { useState } from "react";

const Tabs = ({ children }) => {
	const findActiveTab = (a) => {
		return a.reduce((accumulator, currentValue, i) => {
			if (currentValue.props.active) {
				return i;
			}

			return accumulator;
		}, 0);
	};

	const tabValidator = (tab) => {
		return tab.type.displayName === "Tab" ? true : false;
	};

	const [activeTab, setActiveTab] = useState(findActiveTab(children));
	const length = children.length - 1;
	return (
		<>
			{/* tab */}
			<div className="flex justify-center border-b-0 text-[var(--brown)] my-4">
				{children.map((item, i) => {
					return (
						<>
							{tabValidator(item) && (
								<Tab
									key={`tab-${i}`}
									currentTab={i}
									activeTab={activeTab}
									setActiveTab={setActiveTab}
									lengthTab={length}
								>
									{item.props.children}
								</Tab>
							)}
						</>
					);
				})}
			</div>

			{/* content */}
			<>
				{children.map((item, i) => {
					return (
						<div key={i} className={` ${i === activeTab ? "visible" : "hidden"}`}>
							{item.props.component}
						</div>
					);
				})}
			</>
		</>
	);
};

const Tab = ({ children, activeTab, currentTab, setActiveTab, lengthTab }) => {
	return (
		<div className="text-gray-800 font-medium text-xs md:text-base">
			<div
				className={`px-5 py-1 border border-[var(--brown)] cursor-pointer
      ${activeTab === currentTab && "bg-[var(--brown)] text-white"} ${
					currentTab === 0 && "rounded-l"
				} ${lengthTab === currentTab && "rounded-r"}`}
				onClick={() => setActiveTab(currentTab)}
			>
				{children}
			</div>
		</div>
	);
};

Tab.displayName = "Tab";

export { Tabs, Tab };
