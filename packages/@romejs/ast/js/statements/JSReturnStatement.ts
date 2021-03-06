/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AnyJSExpression, JSNodeBase} from "@romejs/ast";
import {createQuickBuilder} from "../../utils";

export type JSReturnStatement = JSNodeBase & {
	type: "JSReturnStatement";
	argument?: AnyJSExpression;
};

export const jsReturnStatement = createQuickBuilder<
	JSReturnStatement,
	"argument"
>(
	"JSReturnStatement",
	"argument",
	{
		bindingKeys: {},
		visitorKeys: {
			argument: true,
		},
	},
);
