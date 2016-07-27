'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _oneOfRequiredProperty = require('../../utilities/warning/one-of-required-property');

var _oneOfRequiredProperty2 = _interopRequireDefault(_oneOfRequiredProperty);

var _hasChildrenWithoutDisplayNameOf = require('../../utilities/warning/has-children-without-display-name-of');

var _hasChildrenWithoutDisplayNameOf2 = _interopRequireDefault(_hasChildrenWithoutDisplayNameOf);

var _constants = require('../../utilities/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkProps = function checkProps() {}; /*
                                           Copyright (c) 2015, salesforce.com, inc. All rights reserved.
                                           
                                           Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
                                           Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
                                           Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
                                           Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
                                           
                                           THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                                           */
/* eslint-disable import/no-mutable-exports */

if (process.env.NODE_ENV !== 'production') {
	checkProps = function checkProps(COMPONENT, props) {
		(0, _oneOfRequiredProperty2.default)(COMPONENT, {
			options: props.options,
			children: props.children
		});

		if (!props.options) {
			(0, _hasChildrenWithoutDisplayNameOf2.default)(COMPONENT, props.children, _constants.MENU_DROPDOWN_TRIGGER, 'Please add a Dropdown options prop or additional children.');
		}
	};
}

exports.default = checkProps;