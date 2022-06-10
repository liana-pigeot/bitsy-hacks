/**
🚀
@file narrat call
@summary calls a narrat function
@license MIT
@author Liana Pigeot

@description
This can be used to call a narrat function

Usage:
	(narrat "labelId")


HOW TO USE:
Copy-paste into a script tag after the bitsy source
*/

import bitsy from 'bitsy';
import { addDualDialogTag } from './helpers/kitsy-script-toolkit';

// jump function
function narratJump(targetLabel) {
	if (!targetLabel) {
		console.warn('Tried to jump to narrat label, but no label');
		return;
	}
	window.narrat.jump(targetLabel);
}

addDualDialogTag('narrat', function (environment, parameters) {
	narratJump(parameters[0]);
});
