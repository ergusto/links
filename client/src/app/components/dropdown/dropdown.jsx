import React, { useState, Fragment } from 'react';
import { Manager, Reference, Popper } from 'react-popper';
import { Transition } from 'react-spring/renderprops';
import ClickOutside from '../clickOutside/clickOutside.jsx';

export default function({ trigger, content }) {
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<Fragment>
			<Manager>
				<Reference>
					{({ ref }) => (
						<Fragment>
							{trigger(ref, () => setShowDropdown(!showDropdown))}
						</Fragment>
					)}
				</Reference>
				<Transition 
					items={showDropdown}
					from={{ opacity: 0, rotation: '180deg', scale: 0.5, top: -20 }}
					enter={{ opacity: 1, rotation: '0deg', scale: 1, top: 0 }}
					leave={{ opacity: 0, rotation: '180deg', scale: 0.5, top: -20 }}
				>
					{show =>
						show ? ({ rotation, scale, opacity, top: topOffset }) => (
							<Popper placement="auto-end">
								{({ ref, style, placement, arrowProps }) => (
									<div ref={ref} style={style} data-placement={placement}>
										<ClickOutside handler={() => setShowDropdown(false)}>
											{content}
										</ClickOutside>
									</div>
								)}
							</Popper>
						) : null}
				</Transition>
			</Manager>
		</Fragment>
	);
}
