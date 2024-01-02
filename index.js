(function (React) {
	'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getAugmentedNamespace(n) {
	  var f = n.default;
		if (typeof f == "function") {
			var a = function () {
				return f.apply(this, arguments);
			};
			a.prototype = f.prototype;
	  } else a = {};
	  Object.defineProperty(a, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	var jsxRuntime = {exports: {}};

	var reactJsxRuntime_production_min = {};

	/**
	 * @license React
	 * react-jsx-runtime.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactJsxRuntime_production_min;

	function requireReactJsxRuntime_production_min () {
		if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
		hasRequiredReactJsxRuntime_production_min = 1;
	var f=React__default["default"],k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
		function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
		return reactJsxRuntime_production_min;
	}

	(function (module) {

		{
		  module.exports = requireReactJsxRuntime_production_min();
		}
	} (jsxRuntime));

	let webpackCache = {};
	let hasWebpack5 = false;
	if (window.webpackJsonp && !window.webpackJsonp.deckyShimmed) {
	    // Webpack 4, currently on stable
	    const wpRequire = window.webpackJsonp.push([
	        [],
	        { get_require: (mod, _exports, wpRequire) => (mod.exports = wpRequire) },
	        [['get_require']],
	    ]);
	    delete wpRequire.m.get_require;
	    delete wpRequire.c.get_require;
	    webpackCache = wpRequire.c;
	}
	else {
	    // Webpack 5, currently on beta
	    hasWebpack5 = true;
	    const id = Math.random();
	    let initReq;
	    window.webpackChunksteamui.push([
	        [id],
	        {},
	        (r) => {
	            initReq = r;
	        },
	    ]);
	    for (let i of Object.keys(initReq.m)) {
	        try {
	            webpackCache[i] = initReq(i);
	        }
	        catch (e) {
	            console.debug("[DFL:Webpack]: Ignoring require error for module", i, e);
	        }
	    }
	}
	const allModules = hasWebpack5
	    ? Object.values(webpackCache).filter((x) => x)
	    : Object.keys(webpackCache)
	        .map((x) => webpackCache[x].exports)
	        .filter((x) => x);
	const findModule = (filter) => {
	    for (const m of allModules) {
	        if (m.default && filter(m.default))
	            return m.default;
	        if (filter(m))
	            return m;
	    }
	};
	const findModuleChild = (filter) => {
	    for (const m of allModules) {
	        for (const mod of [m.default, m]) {
	            const filterRes = filter(mod);
	            if (filterRes) {
	                return filterRes;
	            }
	            else {
	                continue;
	            }
	        }
	    }
	};
	const CommonUIModule = allModules.find((m) => {
	    if (typeof m !== 'object')
	        return false;
	    for (let prop in m) {
	        if (m[prop]?.contextType?._currentValue && Object.keys(m).length > 60)
	            return true;
	    }
	    return false;
	});
	const IconsModule = findModule((m) => {
	    if (typeof m !== 'object')
	        return false;
	    for (let prop in m) {
	        if (m[prop]?.toString && /Spinner\)}\),.\.createElement\(\"path\",{d:\"M18 /.test(m[prop].toString()))
	            return true;
	    }
	    return false;
	});
	const ReactRouter = allModules.find((m) => {
	    if (typeof m !== 'object')
	        return undefined;
	    for (let prop in m) {
	        if (m[prop]?.computeRootMatch)
	            return true;
	    }
	    return false;
	});

	const CommonDialogDivs = Object.values(CommonUIModule).filter((m) => typeof m === 'object' && m?.render?.toString().includes('"div",Object.assign({},'));
	const MappedDialogDivs = new Map(Object.values(CommonDialogDivs).map((m) => {
	    const renderedDiv = m.render({});
	    // Take only the first class name segment as it identifies the element we want
	    return [renderedDiv.props.className.split(' ')[0], m];
	}));
	MappedDialogDivs.get('DialogHeader');
	MappedDialogDivs.get('DialogSubHeader');
	MappedDialogDivs.get('DialogFooter');
	MappedDialogDivs.get('DialogLabel');
	MappedDialogDivs.get('DialogBodyText');
	MappedDialogDivs.get('DialogBody');
	MappedDialogDivs.get('DialogControlsSection');
	MappedDialogDivs.get('DialogControlsSectionHeader');
	const DialogButtonPrimary = Object.values(CommonUIModule).find((mod) => mod?.render?.toString()?.includes('DialogButton') && mod?.render?.toString()?.includes('Primary'));
	const DialogButtonSecondary = Object.values(CommonUIModule).find((mod) => mod?.render?.toString()?.includes('Object.assign({type:"button"') &&
	    mod?.render?.toString()?.includes('DialogButton') &&
	    mod?.render?.toString()?.includes('Secondary'));
	// This is the "main" button. The Primary can act as a submit button,
	// therefore secondary is chosen (also for backwards comp. reasons)
	const DialogButton = DialogButtonSecondary;

	// Button isn't exported, so call DialogButton to grab it
	DialogButton?.render({}).type;

	const ButtonItem = CommonUIModule.ButtonField ||
	    Object.values(CommonUIModule).find((mod) => mod?.render?.toString()?.includes('"highlightOnFocus","childrenContainerWidth"') ||
	        mod?.render?.toString()?.includes('childrenContainerWidth:"min"'));

	findModuleChild((m) => {
	    if (typeof m !== 'object')
	        return undefined;
	    for (let prop in m) {
	        if (m[prop]?.render?.toString().includes('setFocusedColumn:'))
	            return m[prop];
	    }
	});

	findModuleChild((m) => {
	    if (typeof m !== 'object')
	        return;
	    for (const prop in m) {
	        if (m[prop]?.toString && m[prop].toString().includes('().ControlsListChild') && m[prop].toString().includes('().ControlsListOuterPanel')) {
	            return m[prop];
	        }
	    }
	    return;
	});

	Object.values(findModule((m) => {
	    if (typeof m !== 'object')
	        return false;
	    for (const prop in m) {
	        if (m[prop]?.prototype?.GetPanelElementProps)
	            return true;
	    }
	    return false;
	})).find((m) => m.contextType &&
	    m.prototype?.render.toString().includes('fallback:') &&
	    m?.prototype?.SetChecked &&
	    m?.prototype?.Toggle &&
	    m?.prototype?.GetPanelElementProps);

	Object.values(CommonUIModule).find((mod) => mod?.prototype?.SetSelectedOption && mod?.prototype?.BuildMenu);
	const DropdownItem = Object.values(CommonUIModule).find((mod) => mod?.toString()?.includes('"dropDownControlRef","description"'));

	findModuleChild((m) => {
	    if (typeof m !== 'object')
	        return undefined;
	    for (let prop in m) {
	        if (m[prop]?.render?.toString().includes('"shift-children-below"'))
	            return m[prop];
	    }
	});

	findModuleChild((m) => {
	    if (typeof m !== 'object')
	        return undefined;
	    for (let prop in m) {
	        if (m[prop]?.render?.toString()?.includes('["flow-children","onActivate","onCancel","focusClassName",'))
	            return m[prop];
	    }
	});

	findModuleChild((m) => {
	    if (typeof m !== 'object')
	        return false;
	    for (let prop in m) {
	        if (m[prop]?.toString()?.includes('.GetShowDebugFocusRing())'))
	            return m[prop];
	    }
	    return false;
	});

	var GamepadButton;
	(function (GamepadButton) {
	    GamepadButton[GamepadButton["INVALID"] = 0] = "INVALID";
	    GamepadButton[GamepadButton["OK"] = 1] = "OK";
	    GamepadButton[GamepadButton["CANCEL"] = 2] = "CANCEL";
	    GamepadButton[GamepadButton["SECONDARY"] = 3] = "SECONDARY";
	    GamepadButton[GamepadButton["OPTIONS"] = 4] = "OPTIONS";
	    GamepadButton[GamepadButton["BUMPER_LEFT"] = 5] = "BUMPER_LEFT";
	    GamepadButton[GamepadButton["BUMPER_RIGHT"] = 6] = "BUMPER_RIGHT";
	    GamepadButton[GamepadButton["TRIGGER_LEFT"] = 7] = "TRIGGER_LEFT";
	    GamepadButton[GamepadButton["TRIGGER_RIGHT"] = 8] = "TRIGGER_RIGHT";
	    GamepadButton[GamepadButton["DIR_UP"] = 9] = "DIR_UP";
	    GamepadButton[GamepadButton["DIR_DOWN"] = 10] = "DIR_DOWN";
	    GamepadButton[GamepadButton["DIR_LEFT"] = 11] = "DIR_LEFT";
	    GamepadButton[GamepadButton["DIR_RIGHT"] = 12] = "DIR_RIGHT";
	    GamepadButton[GamepadButton["SELECT"] = 13] = "SELECT";
	    GamepadButton[GamepadButton["START"] = 14] = "START";
	    GamepadButton[GamepadButton["LSTICK_CLICK"] = 15] = "LSTICK_CLICK";
	    GamepadButton[GamepadButton["RSTICK_CLICK"] = 16] = "RSTICK_CLICK";
	    GamepadButton[GamepadButton["LSTICK_TOUCH"] = 17] = "LSTICK_TOUCH";
	    GamepadButton[GamepadButton["RSTICK_TOUCH"] = 18] = "RSTICK_TOUCH";
	    GamepadButton[GamepadButton["LPAD_TOUCH"] = 19] = "LPAD_TOUCH";
	    GamepadButton[GamepadButton["LPAD_CLICK"] = 20] = "LPAD_CLICK";
	    GamepadButton[GamepadButton["RPAD_TOUCH"] = 21] = "RPAD_TOUCH";
	    GamepadButton[GamepadButton["RPAD_CLICK"] = 22] = "RPAD_CLICK";
	    GamepadButton[GamepadButton["REAR_LEFT_UPPER"] = 23] = "REAR_LEFT_UPPER";
	    GamepadButton[GamepadButton["REAR_LEFT_LOWER"] = 24] = "REAR_LEFT_LOWER";
	    GamepadButton[GamepadButton["REAR_RIGHT_UPPER"] = 25] = "REAR_RIGHT_UPPER";
	    GamepadButton[GamepadButton["REAR_RIGHT_LOWER"] = 26] = "REAR_RIGHT_LOWER";
	    GamepadButton[GamepadButton["STEAM_GUIDE"] = 27] = "STEAM_GUIDE";
	    GamepadButton[GamepadButton["STEAM_QUICK_MENU"] = 28] = "STEAM_QUICK_MENU";
	})(GamepadButton || (GamepadButton = {}));

	findModuleChild((m) => {
	    if (typeof m !== 'object')
	        return;
	    for (const prop in m) {
	        if (m[prop]?.toString && m[prop].toString().includes('.Marquee') && m[prop].toString().includes('--fade-length')) {
	            return m[prop];
	        }
	    }
	    return;
	});

	// TODO: implement storing patches as an option so we can offer unpatchAll selectively
	function afterPatch(object, property, handler, options = {}) {
	    const orig = object[property];
	    object[property] = function (...args) {
	        let ret = patch.original.call(this, ...args);
	        ret = handler.call(this, args, ret);
	        if (options.singleShot) {
	            patch.unpatch();
	        }
	        return ret;
	    };
	    const patch = processPatch(object, property, handler, object[property], orig);
	    return patch;
	}
	function processPatch(object, property, handler, patchedFunction, original) {
	    // Assign all props of original function to new one
	    Object.assign(object[property], original);
	    // Allow toString webpack filters to continue to work
	    object[property].toString = () => original.toString();
	    // HACK: for compatibility, remove when all plugins are using new patcher
	    Object.defineProperty(object[property], '__deckyOrig', {
	        get: () => patch.original,
	        set: (val) => (patch.original = val),
	    });
	    // Build a Patch object of this patch
	    const patch = {
	        object,
	        property,
	        handler,
	        patchedFunction,
	        original,
	        hasUnpatched: false,
	        unpatch: () => unpatch(patch),
	    };
	    object[property].__deckyPatch = patch;
	    return patch;
	}
	function unpatch(patch) {
	    const { object, property, handler, patchedFunction, original } = patch;
	    if (patch.hasUnpatched)
	        throw new Error('Function is already unpatched.');
	    let realProp = property;
	    let realObject = object;
	    console.debug('[Patcher] unpatching', {
	        realObject,
	        realProp,
	        object,
	        property,
	        handler,
	        patchedFunction,
	        original,
	        isEqual: realObject[realProp] === patchedFunction,
	    });
	    // If another patch has been applied to this function after this one, move down until we find the correct patch
	    while (realObject[realProp] && realObject[realProp] !== patchedFunction) {
	        realObject = realObject[realProp].__deckyPatch;
	        realProp = 'original';
	        console.debug('[Patcher] moved to next', {
	            realObject,
	            realProp,
	            object,
	            property,
	            handler,
	            patchedFunction,
	            original,
	            isEqual: realObject[realProp] === patchedFunction,
	        });
	    }
	    realObject[realProp] = realObject[realProp].__deckyPatch.original;
	    patch.hasUnpatched = true;
	    console.debug('[Patcher] unpatched', {
	        realObject,
	        realProp,
	        object,
	        property,
	        handler,
	        patchedFunction,
	        original,
	        isEqual: realObject[realProp] === patchedFunction,
	    });
	}

	function fakeRenderComponent(fun, customHooks = {}) {
	    const hooks = window.SP_REACT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher
	        .current;
	    // TODO: add more hooks
	    let oldHooks = {
	        useContext: hooks.useContext,
	        useCallback: hooks.useCallback,
	        useLayoutEffect: hooks.useLayoutEffect,
	        useEffect: hooks.useEffect,
	        useMemo: hooks.useMemo,
	        useRef: hooks.useRef,
	        useState: hooks.useState,
	    };
	    hooks.useCallback = (cb) => cb;
	    hooks.useContext = (cb) => cb._currentValue;
	    hooks.useLayoutEffect = (_) => { }; //cb();
	    hooks.useMemo = (cb, _) => cb;
	    hooks.useEffect = (_) => { }; //cb();
	    hooks.useRef = (val) => ({ current: val || {} });
	    hooks.useState = (v) => {
	        let val = v;
	        return [val, (n) => (val = n)];
	    };
	    Object.assign(hooks, customHooks);
	    const res = fun(hooks);
	    Object.assign(hooks, oldHooks);
	    return res;
	}
	function wrapReactType(node, prop = 'type') {
	    if (node[prop]?.__DECKY_WRAPPED) {
	        return node[prop];
	    }
	    else {
	        return (node[prop] = { ...node[prop], __DECKY_WRAPPED: true });
	    }
	}
	const findInTree = (parent, filter, opts) => {
	    const { walkable = null, ignore = [] } = opts ?? {};
	    if (!parent || typeof parent !== 'object') {
	        // Parent is invalid to search through
	        return null;
	    }
	    if (filter(parent))
	        return parent; // Parent matches, just return
	    if (Array.isArray(parent)) {
	        // Parent is an array, go through values
	        return parent.map((x) => findInTree(x, filter, opts)).find((x) => x);
	    }
	    // Parent is an object, go through values (or option to only use certain keys)
	    return (walkable || Object.keys(parent))
	        .map((x) => !ignore.includes(x) && findInTree(parent[x], filter, opts))
	        .find((x) => x);
	};
	const findInReactTree = (node, filter) => findInTree(node, filter, {
	    // Specialised findInTree for React nodes
	    walkable: ['props', 'children', 'child', 'sibling'],
	});

	function sleep(ms) {
	    return new Promise((res) => setTimeout(res, ms));
	}

	findModuleChild((m) => {
	    if (typeof m !== 'object')
	        return undefined;
	    for (let prop in m) {
	        if (typeof m[prop] === 'function' && m[prop].toString().includes('stopPropagation))')) {
	            return m[prop];
	        }
	    }
	});
	findModuleChild((m) => {
	    if (typeof m !== 'object')
	        return undefined;
	    for (let prop in m) {
	        if (m[prop]?.prototype?.HideIfSubmenu && m[prop]?.prototype?.HideMenu) {
	            return m[prop];
	        }
	    }
	});
	findModuleChild((m) => {
	    if (typeof m !== 'object')
	        return undefined;
	    for (let prop in m) {
	        if ((m[prop]?.toString()?.includes?.('bInGamepadUI:') &&
	            fakeRenderComponent(() => m[prop]({ overview: { appid: 7 } }))?.type?.prototype?.RenderSubMenu) ||
	            (m[prop]?.prototype?.RenderSubMenu && m[prop]?.prototype?.ShowSubMenu)) {
	            return m[prop];
	        }
	    }
	});
	const MenuItem = findModuleChild((m) => {
	    if (typeof m !== 'object')
	        return undefined;
	    for (let prop in m) {
	        if (m[prop]?.render?.toString()?.includes('bPlayAudio:') ||
	            (m[prop]?.prototype?.OnOKButton && m[prop]?.prototype?.OnMouseEnter)) {
	            return m[prop];
	        }
	    }
	});
	/*
	all().map(m => {
	if (typeof m !== "object") return undefined;
	for (let prop in m) { if (m[prop]?.prototype?.OK && m[prop]?.prototype?.Cancel && m[prop]?.prototype?.render) return m[prop]}
	}).find(x => x)
	*/

	findModuleChild((m) => {
	    if (typeof m !== 'object')
	        return undefined;
	    for (let prop in m) {
	        if (typeof m[prop] === 'function' &&
	            m[prop].toString().includes('props.bDisableBackgroundDismiss') &&
	            !m[prop]?.prototype?.Cancel) {
	            return m[prop];
	        }
	    }
	});
	findModuleChild((m) => {
	    if (typeof m !== 'object')
	        return undefined;
	    for (let prop in m) {
	        if (typeof m[prop] === 'function' && m[prop].toString().includes('bHideMainWindowForPopouts:!0')) {
	            return m[prop];
	        }
	    }
	});
	findModuleChild((m) => {
	    if (typeof m !== 'object')
	        return undefined;
	    for (let prop in m) {
	        if (!m[prop]?.prototype?.OK && m[prop]?.prototype?.Cancel && m[prop]?.prototype?.render) {
	            return m[prop];
	        }
	    }
	});
	// new as of december 2022 on beta
	(Object.values(findModule((m) => {
	    if (typeof m !== 'object')
	        return false;
	    for (let prop in m) {
	        if (m[prop]?.m_mapModalManager && Object.values(m)?.find((x) => x?.type)) {
	            return true;
	        }
	    }
	    return false;
	}) || {})?.find((x) => x?.type?.toString()?.includes('((function(){')) ||
	    // before december 2022 beta
	    Object.values(findModule((m) => {
	        if (typeof m !== 'object')
	            return false;
	        for (let prop in m) {
	            if (m[prop]?.toString()?.includes('"ModalManager","DialogWrapper"')) {
	                return true;
	            }
	        }
	        return false;
	    }) || {})?.find((x) => x?.type?.toString()?.includes('((function(){')) ||
	    // old
	    findModuleChild((m) => {
	        if (typeof m !== 'object')
	            return undefined;
	        for (let prop in m) {
	            if (m[prop]?.prototype?.OK && m[prop]?.prototype?.Cancel && m[prop]?.prototype?.render) {
	                return m[prop];
	            }
	        }
	    }));
	const ModalModule = findModule((mod) => {
	    if (typeof mod !== 'object' || !mod.__esModule)
	        return undefined;
	    if (mod.SimpleModal && mod.ModalPosition)
	        return mod;
	});
	ModalModule.SimpleModal;
	ModalModule.ModalPosition;

	findModuleChild((mod) => {
	    if (typeof mod !== 'object' || !mod.__esModule)
	        return undefined;
	    return mod.Panel;
	});
	const [panelSection, mod$1] = findModuleChild((mod) => {
	    for (let prop in mod) {
	        if (mod[prop]?.toString()?.includes('.PanelSection')) {
	            return [mod[prop], mod];
	        }
	    }
	    return null;
	});
	const PanelSection = panelSection;
	// New as of Feb 22 2023 Beta || Old
	const PanelSectionRow = mod$1.PanelSectionRow ||
	    Object.values(mod$1).filter((exp) => !exp?.toString()?.includes('.PanelSection'))[0];

	findModuleChild((m) => {
	    if (typeof m !== 'object')
	        return undefined;
	    for (let prop in m) {
	        if (m[prop]?.toString()?.includes('.ProgressBar,"standard"=='))
	            return m[prop];
	    }
	});
	findModuleChild((m) => {
	    if (typeof m !== 'object')
	        return undefined;
	    for (let prop in m) {
	        if (m[prop]?.toString()?.includes('.ProgressBarFieldStatus},'))
	            return m[prop];
	    }
	});
	findModuleChild((m) => {
	    if (typeof m !== 'object')
	        return undefined;
	    for (let prop in m) {
	        if (m[prop]?.toString()?.includes('"indeterminate","nTransitionSec"'))
	            return m[prop];
	    }
	});

	var SideMenu;
	(function (SideMenu) {
	    SideMenu[SideMenu["None"] = 0] = "None";
	    SideMenu[SideMenu["Main"] = 1] = "Main";
	    SideMenu[SideMenu["QuickAccess"] = 2] = "QuickAccess";
	})(SideMenu || (SideMenu = {}));
	var QuickAccessTab;
	(function (QuickAccessTab) {
	    QuickAccessTab[QuickAccessTab["Notifications"] = 0] = "Notifications";
	    QuickAccessTab[QuickAccessTab["RemotePlayTogetherControls"] = 1] = "RemotePlayTogetherControls";
	    QuickAccessTab[QuickAccessTab["VoiceChat"] = 2] = "VoiceChat";
	    QuickAccessTab[QuickAccessTab["Friends"] = 3] = "Friends";
	    QuickAccessTab[QuickAccessTab["Settings"] = 4] = "Settings";
	    QuickAccessTab[QuickAccessTab["Perf"] = 5] = "Perf";
	    QuickAccessTab[QuickAccessTab["Help"] = 6] = "Help";
	    QuickAccessTab[QuickAccessTab["Music"] = 7] = "Music";
	    QuickAccessTab[QuickAccessTab["Decky"] = 999] = "Decky";
	})(QuickAccessTab || (QuickAccessTab = {}));
	var DisplayStatus;
	(function (DisplayStatus) {
	    DisplayStatus[DisplayStatus["Invalid"] = 0] = "Invalid";
	    DisplayStatus[DisplayStatus["Launching"] = 1] = "Launching";
	    DisplayStatus[DisplayStatus["Uninstalling"] = 2] = "Uninstalling";
	    DisplayStatus[DisplayStatus["Installing"] = 3] = "Installing";
	    DisplayStatus[DisplayStatus["Running"] = 4] = "Running";
	    DisplayStatus[DisplayStatus["Validating"] = 5] = "Validating";
	    DisplayStatus[DisplayStatus["Updating"] = 6] = "Updating";
	    DisplayStatus[DisplayStatus["Downloading"] = 7] = "Downloading";
	    DisplayStatus[DisplayStatus["Synchronizing"] = 8] = "Synchronizing";
	    DisplayStatus[DisplayStatus["ReadyToInstall"] = 9] = "ReadyToInstall";
	    DisplayStatus[DisplayStatus["ReadyToPreload"] = 10] = "ReadyToPreload";
	    DisplayStatus[DisplayStatus["ReadyToLaunch"] = 11] = "ReadyToLaunch";
	    DisplayStatus[DisplayStatus["RegionRestricted"] = 12] = "RegionRestricted";
	    DisplayStatus[DisplayStatus["PresaleOnly"] = 13] = "PresaleOnly";
	    DisplayStatus[DisplayStatus["InvalidPlatform"] = 14] = "InvalidPlatform";
	    DisplayStatus[DisplayStatus["PreloadComplete"] = 16] = "PreloadComplete";
	    DisplayStatus[DisplayStatus["BorrowerLocked"] = 17] = "BorrowerLocked";
	    DisplayStatus[DisplayStatus["UpdatePaused"] = 18] = "UpdatePaused";
	    DisplayStatus[DisplayStatus["UpdateQueued"] = 19] = "UpdateQueued";
	    DisplayStatus[DisplayStatus["UpdateRequired"] = 20] = "UpdateRequired";
	    DisplayStatus[DisplayStatus["UpdateDisabled"] = 21] = "UpdateDisabled";
	    DisplayStatus[DisplayStatus["DownloadPaused"] = 22] = "DownloadPaused";
	    DisplayStatus[DisplayStatus["DownloadQueued"] = 23] = "DownloadQueued";
	    DisplayStatus[DisplayStatus["DownloadRequired"] = 24] = "DownloadRequired";
	    DisplayStatus[DisplayStatus["DownloadDisabled"] = 25] = "DownloadDisabled";
	    DisplayStatus[DisplayStatus["LicensePending"] = 26] = "LicensePending";
	    DisplayStatus[DisplayStatus["LicenseExpired"] = 27] = "LicenseExpired";
	    DisplayStatus[DisplayStatus["AvailForFree"] = 28] = "AvailForFree";
	    DisplayStatus[DisplayStatus["AvailToBorrow"] = 29] = "AvailToBorrow";
	    DisplayStatus[DisplayStatus["AvailGuestPass"] = 30] = "AvailGuestPass";
	    DisplayStatus[DisplayStatus["Purchase"] = 31] = "Purchase";
	    DisplayStatus[DisplayStatus["Unavailable"] = 32] = "Unavailable";
	    DisplayStatus[DisplayStatus["NotLaunchable"] = 33] = "NotLaunchable";
	    DisplayStatus[DisplayStatus["CloudError"] = 34] = "CloudError";
	    DisplayStatus[DisplayStatus["CloudOutOfDate"] = 35] = "CloudOutOfDate";
	    DisplayStatus[DisplayStatus["Terminating"] = 36] = "Terminating";
	})(DisplayStatus || (DisplayStatus = {}));
	const Router = findModuleChild((m) => {
	    if (typeof m !== 'object')
	        return undefined;
	    for (let prop in m) {
	        if (m[prop]?.Navigate && m[prop]?.NavigationManager)
	            return m[prop];
	    }
	});
	let Navigation = {};
	try {
	    (async () => {
	        let InternalNavigators = {};
	        if (!Router.NavigateToAppProperties || Router.deckyShim) {
	            function initInternalNavigators() {
	                try {
	                    InternalNavigators = findModuleChild((m) => {
	                        if (typeof m !== 'object')
	                            return undefined;
	                        for (let prop in m) {
	                            if (m[prop]?.GetNavigator) {
	                                return m[prop];
	                            }
	                        }
	                    })?.GetNavigator();
	                }
	                catch (e) {
	                    console.error('[DFL:Router]: Failed to init internal navigators, trying again');
	                }
	            }
	            initInternalNavigators();
	            while (!InternalNavigators?.AppProperties) {
	                console.log('[DFL:Router]: Trying to init internal navigators again');
	                await sleep(100);
	                initInternalNavigators();
	            }
	        }
	        const newNavigation = {
	            Navigate: Router.Navigate?.bind(Router),
	            NavigateBack: Router.WindowStore?.GamepadUIMainWindowInstance?.NavigateBack?.bind(Router.WindowStore.GamepadUIMainWindowInstance),
	            NavigateToAppProperties: InternalNavigators?.AppProperties || Router.NavigateToAppProperties?.bind(Router),
	            NavigateToExternalWeb: InternalNavigators?.ExternalWeb || Router.NavigateToExternalWeb?.bind(Router),
	            NavigateToInvites: InternalNavigators?.Invites || Router.NavigateToInvites?.bind(Router),
	            NavigateToChat: Router.NavigateToChat?.bind(Router),
	            NavigateToLibraryTab: InternalNavigators?.LibraryTab || Router.NavigateToLibraryTab?.bind(Router),
	            NavigateToLayoutPreview: Router.NavigateToLayoutPreview?.bind(Router),
	            NavigateToSteamWeb: Router.WindowStore?.GamepadUIMainWindowInstance?.NavigateToSteamWeb?.bind(Router.WindowStore.GamepadUIMainWindowInstance),
	            OpenSideMenu: Router.WindowStore?.GamepadUIMainWindowInstance?.MenuStore.OpenSideMenu?.bind(Router.WindowStore.GamepadUIMainWindowInstance.MenuStore),
	            OpenQuickAccessMenu: Router.WindowStore?.GamepadUIMainWindowInstance?.MenuStore.OpenQuickAccessMenu?.bind(Router.WindowStore.GamepadUIMainWindowInstance.MenuStore),
	            OpenMainMenu: Router.WindowStore?.GamepadUIMainWindowInstance?.MenuStore.OpenMainMenu?.bind(Router.WindowStore.GamepadUIMainWindowInstance.MenuStore),
	            CloseSideMenus: Router.CloseSideMenus?.bind(Router),
	            OpenPowerMenu: Router.OpenPowerMenu?.bind(Router),
	        };
	        Object.assign(Navigation, newNavigation);
	    })();
	}
	catch (e) {
	    console.error('[DFL:Router]: Error initializing Navigation interface', e);
	}

	findModuleChild((mod) => {
	    for (let prop in mod) {
	        if (mod[prop]?.toString()?.includes('"disableRouteReporting"')) {
	            return mod[prop];
	        }
	    }
	    return null;
	});

	Object.values(CommonUIModule).find((mod) => mod?.toString()?.includes('SliderField,fallback'));

	// TODO type this and other icons?
	Object.values(IconsModule).find((mod) => mod?.toString && /Spinner\)}\),.\.createElement\(\"path\",{d:\"M18 /.test(mod.toString()));

	const quickAccessMenuClasses = findModule((mod) => typeof mod === 'object' && mod?.Title?.includes('quickaccessmenu'));
	/**
	 * @depreciated please use quickAccessMenuClasses instead
	 */
	const staticClasses = quickAccessMenuClasses;
	findModule((mod) => typeof mod === 'object' && mod?.ScrollPanel?.includes('scrollpanel'));
	findModule((mod) => typeof mod === 'object' && mod?.GamepadDialogContent?.includes('gamepaddialog'));
	findModule((mod) => typeof mod === 'object' && typeof mod?.PanelSection === 'string' && mod?.PanelSection?.includes('quickaccesscontrols'));
	findModule((mod) => typeof mod === 'object' && mod?.OOBEUpdateStatusContainer?.includes('updaterfield'));
	findModule((mod) => typeof mod === 'object' && mod?.Container?.includes('appdetailsplaysection'));
	findModule((mod) => typeof mod === 'object' && mod?.SliderControlPanelGroup?.includes('gamepadslider'));
	findModule((mod) => typeof mod === 'object' && mod?.TopCapsule?.includes('sharedappdetailsheader'));
	findModule((mod) => typeof mod === 'object' && mod?.HeaderLoaded?.includes('appdetails_'));
	findModule((mod) => typeof mod === 'object' && mod?.BasicUiRoot?.includes('gamepadui_'));
	findModule((mod) => typeof mod === 'object' && mod?.GamepadTabbedPage?.includes('gamepadtabbedpage_'));
	findModule((mod) => typeof mod === 'object' && mod?.BasicContextMenuModal?.includes('gamepadcontextmenu'));
	findModule((mod) => typeof mod === 'object' && mod?.AchievementListItemBase?.includes('achievementslist'));
	findModule((mod) => typeof mod === 'object' && mod?.MainMenuAppRunning?.includes('mainmenuapprunning'));
	findModule((mod) => typeof mod === 'object' && mod?.AppDetailsRoot?.includes('basicappdetailssectionstyler_'));

	const SteamSpinner = findModuleChild((m) => {
	    if (typeof m !== 'object')
	        return undefined;
	    for (let prop in m) {
	        if (m[prop]?.toString?.()?.includes('Steam Spinner') && m[prop]?.toString?.()?.includes('src'))
	            return m[prop];
	    }
	});

	let oldTabs;
	try {
	    const oldTabsModule = findModule((m) => {
	        if (typeof m !== 'object')
	            return false;
	        for (let prop in m) {
	            if (m[prop]?.Unbleed)
	                return true;
	        }
	        return false;
	    });
	    if (oldTabsModule)
	        oldTabs = Object.values(oldTabsModule).find((x) => x?.type?.toString()?.includes('((function(){'));
	}
	catch (e) {
	    console.error('Error finding oldTabs:', e);
	}

	Object.values(CommonUIModule).find((mod) => mod?.validateUrl && mod?.validateEmail);

	Object.values(CommonUIModule).find((mod) => mod?.render?.toString()?.includes('.ToggleOff)'));

	const ToggleField = Object.values(CommonUIModule).find((mod) => mod?.render?.toString()?.includes('ToggleField,fallback'));

	const ScrollingModule = findModule((mod) => {
	    if (typeof mod !== 'object' || !mod.__esModule)
	        return undefined;
	    if (mod.ScrollPanel)
	        return mod;
	});
	ScrollingModule.ScrollPanel;
	findModuleChild((mod) => {
	    if (typeof mod !== 'object' || !mod.__esModule)
	        return undefined;
	    return mod.ScrollPanelGroup;
	});

	/**
	 * Get the current params from ReactRouter
	 *
	 * @returns an object with the current ReactRouter params
	 *
	 * @example
	 * import { useParams } from "decky-frontend-lib";
	 *
	 * const { appid } = useParams<{ appid: string }>()
	 */
	Object.values(ReactRouter).find((val) => /return (\w)\?\1\.params:{}/.test(`${val}`));

	// TypeScript helper function
	const definePlugin = (fn) => {
	    return (...args) => {
	        // TODO: Maybe wrap this
	        return fn(...args);
	    };
	};

	var DefaultContext = {
	  color: undefined,
	  size: undefined,
	  className: undefined,
	  style: undefined,
	  attr: undefined
	};
	var IconContext = React__default["default"].createContext && React__default["default"].createContext(DefaultContext);

	var __assign = window && window.__assign || function () {
	  __assign = Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	      s = arguments[i];
	      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	    }
	    return t;
	  };
	  return __assign.apply(this, arguments);
	};
	var __rest = window && window.__rest || function (s, e) {
	  var t = {};
	  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	  }
	  return t;
	};
	function Tree2Element(tree) {
	  return tree && tree.map(function (node, i) {
	    return React__default["default"].createElement(node.tag, __assign({
	      key: i
	    }, node.attr), Tree2Element(node.child));
	  });
	}
	function GenIcon(data) {
	  // eslint-disable-next-line react/display-name
	  return function (props) {
	    return React__default["default"].createElement(IconBase, __assign({
	      attr: __assign({}, data.attr)
	    }, props), Tree2Element(data.child));
	  };
	}
	function IconBase(props) {
	  var elem = function (conf) {
	    var attr = props.attr,
	      size = props.size,
	      title = props.title,
	      svgProps = __rest(props, ["attr", "size", "title"]);
	    var computedSize = size || conf.size || "1em";
	    var className;
	    if (conf.className) className = conf.className;
	    if (props.className) className = (className ? className + " " : "") + props.className;
	    return React__default["default"].createElement("svg", __assign({
	      stroke: "currentColor",
	      fill: "currentColor",
	      strokeWidth: "0"
	    }, conf.attr, attr, svgProps, {
	      className: className,
	      style: __assign(__assign({
	        color: props.color || conf.color
	      }, conf.style), props.style),
	      height: computedSize,
	      width: computedSize,
	      xmlns: "http://www.w3.org/2000/svg"
	    }), title && React__default["default"].createElement("title", null, title), props.children);
	  };
	  return IconContext !== undefined ? React__default["default"].createElement(IconContext.Consumer, null, function (conf) {
	    return elem(conf);
	  }) : elem(DefaultContext);
	}

	// THIS FILE IS AUTO GENERATED
	function FaGamepad (props) {
	  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 640 512"},"child":[{"tag":"path","attr":{"d":"M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"}}]})(props);
	}

	var levenshtein = {exports: {}};

	const peq = new Uint32Array(0x10000);
	const myers_32 = (a, b) => {
	    const n = a.length;
	    const m = b.length;
	    const lst = 1 << (n - 1);
	    let pv = -1;
	    let mv = 0;
	    let sc = n;
	    let i = n;
	    while (i--) {
	        peq[a.charCodeAt(i)] |= 1 << i;
	    }
	    for (i = 0; i < m; i++) {
	        let eq = peq[b.charCodeAt(i)];
	        const xv = eq | mv;
	        eq |= ((eq & pv) + pv) ^ pv;
	        mv |= ~(eq | pv);
	        pv &= eq;
	        if (mv & lst) {
	            sc++;
	        }
	        if (pv & lst) {
	            sc--;
	        }
	        mv = (mv << 1) | 1;
	        pv = (pv << 1) | ~(xv | mv);
	        mv &= xv;
	    }
	    i = n;
	    while (i--) {
	        peq[a.charCodeAt(i)] = 0;
	    }
	    return sc;
	};
	const myers_x = (b, a) => {
	    const n = a.length;
	    const m = b.length;
	    const mhc = [];
	    const phc = [];
	    const hsize = Math.ceil(n / 32);
	    const vsize = Math.ceil(m / 32);
	    for (let i = 0; i < hsize; i++) {
	        phc[i] = -1;
	        mhc[i] = 0;
	    }
	    let j = 0;
	    for (; j < vsize - 1; j++) {
	        let mv = 0;
	        let pv = -1;
	        const start = j * 32;
	        const vlen = Math.min(32, m) + start;
	        for (let k = start; k < vlen; k++) {
	            peq[b.charCodeAt(k)] |= 1 << k;
	        }
	        for (let i = 0; i < n; i++) {
	            const eq = peq[a.charCodeAt(i)];
	            const pb = (phc[(i / 32) | 0] >>> i) & 1;
	            const mb = (mhc[(i / 32) | 0] >>> i) & 1;
	            const xv = eq | mv;
	            const xh = ((((eq | mb) & pv) + pv) ^ pv) | eq | mb;
	            let ph = mv | ~(xh | pv);
	            let mh = pv & xh;
	            if ((ph >>> 31) ^ pb) {
	                phc[(i / 32) | 0] ^= 1 << i;
	            }
	            if ((mh >>> 31) ^ mb) {
	                mhc[(i / 32) | 0] ^= 1 << i;
	            }
	            ph = (ph << 1) | pb;
	            mh = (mh << 1) | mb;
	            pv = mh | ~(xv | ph);
	            mv = ph & xv;
	        }
	        for (let k = start; k < vlen; k++) {
	            peq[b.charCodeAt(k)] = 0;
	        }
	    }
	    let mv = 0;
	    let pv = -1;
	    const start = j * 32;
	    const vlen = Math.min(32, m - start) + start;
	    for (let k = start; k < vlen; k++) {
	        peq[b.charCodeAt(k)] |= 1 << k;
	    }
	    let score = m;
	    for (let i = 0; i < n; i++) {
	        const eq = peq[a.charCodeAt(i)];
	        const pb = (phc[(i / 32) | 0] >>> i) & 1;
	        const mb = (mhc[(i / 32) | 0] >>> i) & 1;
	        const xv = eq | mv;
	        const xh = ((((eq | mb) & pv) + pv) ^ pv) | eq | mb;
	        let ph = mv | ~(xh | pv);
	        let mh = pv & xh;
	        score += (ph >>> (m - 1)) & 1;
	        score -= (mh >>> (m - 1)) & 1;
	        if ((ph >>> 31) ^ pb) {
	            phc[(i / 32) | 0] ^= 1 << i;
	        }
	        if ((mh >>> 31) ^ mb) {
	            mhc[(i / 32) | 0] ^= 1 << i;
	        }
	        ph = (ph << 1) | pb;
	        mh = (mh << 1) | mb;
	        pv = mh | ~(xv | ph);
	        mv = ph & xv;
	    }
	    for (let k = start; k < vlen; k++) {
	        peq[b.charCodeAt(k)] = 0;
	    }
	    return score;
	};
	const distance = (a, b) => {
	    if (a.length < b.length) {
	        const tmp = b;
	        b = a;
	        a = tmp;
	    }
	    if (b.length === 0) {
	        return a.length;
	    }
	    if (a.length <= 32) {
	        return myers_32(a, b);
	    }
	    return myers_x(a, b);
	};
	const closest = (str, arr) => {
	    let min_distance = Infinity;
	    let min_index = 0;
	    for (let i = 0; i < arr.length; i++) {
	        const dist = distance(str, arr[i]);
	        if (dist < min_distance) {
	            min_distance = dist;
	            min_index = i;
	        }
	    }
	    return arr[min_index];
	};

	var mod = /*#__PURE__*/Object.freeze({
		__proto__: null,
		closest: closest,
		distance: distance
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(mod);

	(function (module, exports) {
		(function() {
		  
		  var collator;
		  try {
		    collator = (typeof Intl !== "undefined" && typeof Intl.Collator !== "undefined") ? Intl.Collator("generic", { sensitivity: "base" }) : null;
		  } catch (err){
		    console.log("Collator could not be initialized and wouldn't be used");
		  }

		  var levenshtein = require$$0;

		  // arrays to re-use
		  var prevRow = [],
		    str2Char = [];
		  
		  /**
		   * Based on the algorithm at http://en.wikipedia.org/wiki/Levenshtein_distance.
		   */
		  var Levenshtein = {
		    /**
		     * Calculate levenshtein distance of the two strings.
		     *
		     * @param str1 String the first string.
		     * @param str2 String the second string.
		     * @param [options] Additional options.
		     * @param [options.useCollator] Use `Intl.Collator` for locale-sensitive string comparison.
		     * @return Integer the levenshtein distance (0 and above).
		     */
		    get: function(str1, str2, options) {
		      var useCollator = (options && collator && options.useCollator);
		      
		      if (useCollator) {
		        var str1Len = str1.length,
		          str2Len = str2.length;
		        
		        // base cases
		        if (str1Len === 0) return str2Len;
		        if (str2Len === 0) return str1Len;

		        // two rows
		        var curCol, nextCol, i, j, tmp;

		        // initialise previous row
		        for (i=0; i<str2Len; ++i) {
		          prevRow[i] = i;
		          str2Char[i] = str2.charCodeAt(i);
		        }
		        prevRow[str2Len] = str2Len;

		        var strCmp;
		        // calculate current row distance from previous row using collator
		        for (i = 0; i < str1Len; ++i) {
		          nextCol = i + 1;

		          for (j = 0; j < str2Len; ++j) {
		            curCol = nextCol;

		            // substution
		            strCmp = 0 === collator.compare(str1.charAt(i), String.fromCharCode(str2Char[j]));

		            nextCol = prevRow[j] + (strCmp ? 0 : 1);

		            // insertion
		            tmp = curCol + 1;
		            if (nextCol > tmp) {
		              nextCol = tmp;
		            }
		            // deletion
		            tmp = prevRow[j + 1] + 1;
		            if (nextCol > tmp) {
		              nextCol = tmp;
		            }

		            // copy current col value into previous (in preparation for next iteration)
		            prevRow[j] = curCol;
		          }

		          // copy last col value into previous (in preparation for next iteration)
		          prevRow[j] = nextCol;
		        }
		        return nextCol;
		      }
		      return levenshtein.distance(str1, str2);
		    }

		  };

		  // amd
		  if (module !== null && 'object' !== "undefined" && module.exports === exports) {
		    module.exports = Levenshtein;
		  }
		  // web worker
		  else if (typeof self !== "undefined" && typeof self.postMessage === 'function' && typeof self.importScripts === 'function') {
		    self.Levenshtein = Levenshtein;
		  }
		  // browser main thread
		  else if (typeof window !== "undefined" && window !== null) {
		    window.Levenshtein = Levenshtein;
		  }
		}());
	} (levenshtein, levenshtein.exports));

	const normalize = (str) => {
	    return str
	        .toLowerCase()
	        .normalize('NFD')
	        .replace(/[\u0300-\u036f]/g, '')
	        .replace(/[^a-zA-Z0-9\-\/\s]/g, '')
	        .trim();
	};

	function commonjsRequire(path) {
		throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
	}

	var localforage$1 = {exports: {}};

	/*!
	    localForage -- Offline Storage, Improved
	    Version 1.10.0
	    https://localforage.github.io/localForage
	    (c) 2013-2017 Mozilla, Apache License 2.0
	*/

	(function (module, exports) {
		(function(f){{module.exports=f();}})(function(){return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof commonjsRequire=="function"&&commonjsRequire;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r);}return n[o].exports}var i=typeof commonjsRequire=="function"&&commonjsRequire;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
		(function (global){
		var Mutation = global.MutationObserver || global.WebKitMutationObserver;

		var scheduleDrain;

		{
		  if (Mutation) {
		    var called = 0;
		    var observer = new Mutation(nextTick);
		    var element = global.document.createTextNode('');
		    observer.observe(element, {
		      characterData: true
		    });
		    scheduleDrain = function () {
		      element.data = (called = ++called % 2);
		    };
		  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
		    var channel = new global.MessageChannel();
		    channel.port1.onmessage = nextTick;
		    scheduleDrain = function () {
		      channel.port2.postMessage(0);
		    };
		  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
		    scheduleDrain = function () {

		      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
		      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
		      var scriptEl = global.document.createElement('script');
		      scriptEl.onreadystatechange = function () {
		        nextTick();

		        scriptEl.onreadystatechange = null;
		        scriptEl.parentNode.removeChild(scriptEl);
		        scriptEl = null;
		      };
		      global.document.documentElement.appendChild(scriptEl);
		    };
		  } else {
		    scheduleDrain = function () {
		      setTimeout(nextTick, 0);
		    };
		  }
		}

		var draining;
		var queue = [];
		//named nextTick for less confusing stack traces
		function nextTick() {
		  draining = true;
		  var i, oldQueue;
		  var len = queue.length;
		  while (len) {
		    oldQueue = queue;
		    queue = [];
		    i = -1;
		    while (++i < len) {
		      oldQueue[i]();
		    }
		    len = queue.length;
		  }
		  draining = false;
		}

		module.exports = immediate;
		function immediate(task) {
		  if (queue.push(task) === 1 && !draining) {
		    scheduleDrain();
		  }
		}

		}).call(this,typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
		},{}],2:[function(_dereq_,module,exports){
		var immediate = _dereq_(1);

		/* istanbul ignore next */
		function INTERNAL() {}

		var handlers = {};

		var REJECTED = ['REJECTED'];
		var FULFILLED = ['FULFILLED'];
		var PENDING = ['PENDING'];

		module.exports = Promise;

		function Promise(resolver) {
		  if (typeof resolver !== 'function') {
		    throw new TypeError('resolver must be a function');
		  }
		  this.state = PENDING;
		  this.queue = [];
		  this.outcome = void 0;
		  if (resolver !== INTERNAL) {
		    safelyResolveThenable(this, resolver);
		  }
		}

		Promise.prototype["catch"] = function (onRejected) {
		  return this.then(null, onRejected);
		};
		Promise.prototype.then = function (onFulfilled, onRejected) {
		  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
		    typeof onRejected !== 'function' && this.state === REJECTED) {
		    return this;
		  }
		  var promise = new this.constructor(INTERNAL);
		  if (this.state !== PENDING) {
		    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
		    unwrap(promise, resolver, this.outcome);
		  } else {
		    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
		  }

		  return promise;
		};
		function QueueItem(promise, onFulfilled, onRejected) {
		  this.promise = promise;
		  if (typeof onFulfilled === 'function') {
		    this.onFulfilled = onFulfilled;
		    this.callFulfilled = this.otherCallFulfilled;
		  }
		  if (typeof onRejected === 'function') {
		    this.onRejected = onRejected;
		    this.callRejected = this.otherCallRejected;
		  }
		}
		QueueItem.prototype.callFulfilled = function (value) {
		  handlers.resolve(this.promise, value);
		};
		QueueItem.prototype.otherCallFulfilled = function (value) {
		  unwrap(this.promise, this.onFulfilled, value);
		};
		QueueItem.prototype.callRejected = function (value) {
		  handlers.reject(this.promise, value);
		};
		QueueItem.prototype.otherCallRejected = function (value) {
		  unwrap(this.promise, this.onRejected, value);
		};

		function unwrap(promise, func, value) {
		  immediate(function () {
		    var returnValue;
		    try {
		      returnValue = func(value);
		    } catch (e) {
		      return handlers.reject(promise, e);
		    }
		    if (returnValue === promise) {
		      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
		    } else {
		      handlers.resolve(promise, returnValue);
		    }
		  });
		}

		handlers.resolve = function (self, value) {
		  var result = tryCatch(getThen, value);
		  if (result.status === 'error') {
		    return handlers.reject(self, result.value);
		  }
		  var thenable = result.value;

		  if (thenable) {
		    safelyResolveThenable(self, thenable);
		  } else {
		    self.state = FULFILLED;
		    self.outcome = value;
		    var i = -1;
		    var len = self.queue.length;
		    while (++i < len) {
		      self.queue[i].callFulfilled(value);
		    }
		  }
		  return self;
		};
		handlers.reject = function (self, error) {
		  self.state = REJECTED;
		  self.outcome = error;
		  var i = -1;
		  var len = self.queue.length;
		  while (++i < len) {
		    self.queue[i].callRejected(error);
		  }
		  return self;
		};

		function getThen(obj) {
		  // Make sure we only access the accessor once as required by the spec
		  var then = obj && obj.then;
		  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
		    return function appyThen() {
		      then.apply(obj, arguments);
		    };
		  }
		}

		function safelyResolveThenable(self, thenable) {
		  // Either fulfill, reject or reject with error
		  var called = false;
		  function onError(value) {
		    if (called) {
		      return;
		    }
		    called = true;
		    handlers.reject(self, value);
		  }

		  function onSuccess(value) {
		    if (called) {
		      return;
		    }
		    called = true;
		    handlers.resolve(self, value);
		  }

		  function tryToUnwrap() {
		    thenable(onSuccess, onError);
		  }

		  var result = tryCatch(tryToUnwrap);
		  if (result.status === 'error') {
		    onError(result.value);
		  }
		}

		function tryCatch(func, value) {
		  var out = {};
		  try {
		    out.value = func(value);
		    out.status = 'success';
		  } catch (e) {
		    out.status = 'error';
		    out.value = e;
		  }
		  return out;
		}

		Promise.resolve = resolve;
		function resolve(value) {
		  if (value instanceof this) {
		    return value;
		  }
		  return handlers.resolve(new this(INTERNAL), value);
		}

		Promise.reject = reject;
		function reject(reason) {
		  var promise = new this(INTERNAL);
		  return handlers.reject(promise, reason);
		}

		Promise.all = all;
		function all(iterable) {
		  var self = this;
		  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
		    return this.reject(new TypeError('must be an array'));
		  }

		  var len = iterable.length;
		  var called = false;
		  if (!len) {
		    return this.resolve([]);
		  }

		  var values = new Array(len);
		  var resolved = 0;
		  var i = -1;
		  var promise = new this(INTERNAL);

		  while (++i < len) {
		    allResolver(iterable[i], i);
		  }
		  return promise;
		  function allResolver(value, i) {
		    self.resolve(value).then(resolveFromAll, function (error) {
		      if (!called) {
		        called = true;
		        handlers.reject(promise, error);
		      }
		    });
		    function resolveFromAll(outValue) {
		      values[i] = outValue;
		      if (++resolved === len && !called) {
		        called = true;
		        handlers.resolve(promise, values);
		      }
		    }
		  }
		}

		Promise.race = race;
		function race(iterable) {
		  var self = this;
		  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
		    return this.reject(new TypeError('must be an array'));
		  }

		  var len = iterable.length;
		  var called = false;
		  if (!len) {
		    return this.resolve([]);
		  }

		  var i = -1;
		  var promise = new this(INTERNAL);

		  while (++i < len) {
		    resolver(iterable[i]);
		  }
		  return promise;
		  function resolver(value) {
		    self.resolve(value).then(function (response) {
		      if (!called) {
		        called = true;
		        handlers.resolve(promise, response);
		      }
		    }, function (error) {
		      if (!called) {
		        called = true;
		        handlers.reject(promise, error);
		      }
		    });
		  }
		}

		},{"1":1}],3:[function(_dereq_,module,exports){
		(function (global){
		if (typeof global.Promise !== 'function') {
		  global.Promise = _dereq_(2);
		}

		}).call(this,typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
		},{"2":2}],4:[function(_dereq_,module,exports){

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function getIDB() {
		    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
		    try {
		        if (typeof indexedDB !== 'undefined') {
		            return indexedDB;
		        }
		        if (typeof webkitIndexedDB !== 'undefined') {
		            return webkitIndexedDB;
		        }
		        if (typeof mozIndexedDB !== 'undefined') {
		            return mozIndexedDB;
		        }
		        if (typeof OIndexedDB !== 'undefined') {
		            return OIndexedDB;
		        }
		        if (typeof msIndexedDB !== 'undefined') {
		            return msIndexedDB;
		        }
		    } catch (e) {
		        return;
		    }
		}

		var idb = getIDB();

		function isIndexedDBValid() {
		    try {
		        // Initialize IndexedDB; fall back to vendor-prefixed versions
		        // if needed.
		        if (!idb || !idb.open) {
		            return false;
		        }
		        // We mimic PouchDB here;
		        //
		        // We test for openDatabase because IE Mobile identifies itself
		        // as Safari. Oh the lulz...
		        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

		        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

		        // Safari <10.1 does not meet our requirements for IDB support
		        // (see: https://github.com/pouchdb/pouchdb/issues/5572).
		        // Safari 10.1 shipped with fetch, we can use that to detect it.
		        // Note: this creates issues with `window.fetch` polyfills and
		        // overrides; see:
		        // https://github.com/localForage/localForage/issues/856
		        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
		        // some outdated implementations of IDB that appear on Samsung
		        // and HTC Android devices <4.4 are missing IDBKeyRange
		        // See: https://github.com/mozilla/localForage/issues/128
		        // See: https://github.com/mozilla/localForage/issues/272
		        typeof IDBKeyRange !== 'undefined';
		    } catch (e) {
		        return false;
		    }
		}

		// Abstracts constructing a Blob object, so it also works in older
		// browsers that don't support the native Blob constructor. (i.e.
		// old QtWebKit versions, at least).
		// Abstracts constructing a Blob object, so it also works in older
		// browsers that don't support the native Blob constructor. (i.e.
		// old QtWebKit versions, at least).
		function createBlob(parts, properties) {
		    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
		    parts = parts || [];
		    properties = properties || {};
		    try {
		        return new Blob(parts, properties);
		    } catch (e) {
		        if (e.name !== 'TypeError') {
		            throw e;
		        }
		        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
		        var builder = new Builder();
		        for (var i = 0; i < parts.length; i += 1) {
		            builder.append(parts[i]);
		        }
		        return builder.getBlob(properties.type);
		    }
		}

		// This is CommonJS because lie is an external dependency, so Rollup
		// can just ignore it.
		if (typeof Promise === 'undefined') {
		    // In the "nopromises" build this will just throw if you don't have
		    // a global promise object, but it would throw anyway later.
		    _dereq_(3);
		}
		var Promise$1 = Promise;

		function executeCallback(promise, callback) {
		    if (callback) {
		        promise.then(function (result) {
		            callback(null, result);
		        }, function (error) {
		            callback(error);
		        });
		    }
		}

		function executeTwoCallbacks(promise, callback, errorCallback) {
		    if (typeof callback === 'function') {
		        promise.then(callback);
		    }

		    if (typeof errorCallback === 'function') {
		        promise["catch"](errorCallback);
		    }
		}

		function normalizeKey(key) {
		    // Cast the key to a string, as that's all we can set as a key.
		    if (typeof key !== 'string') {
		        console.warn(key + ' used as a key, but it is not a string.');
		        key = String(key);
		    }

		    return key;
		}

		function getCallback() {
		    if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
		        return arguments[arguments.length - 1];
		    }
		}

		// Some code originally from async_storage.js in
		// [Gaia](https://github.com/mozilla-b2g/gaia).

		var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
		var supportsBlobs = void 0;
		var dbContexts = {};
		var toString = Object.prototype.toString;

		// Transaction Modes
		var READ_ONLY = 'readonly';
		var READ_WRITE = 'readwrite';

		// Transform a binary string to an array buffer, because otherwise
		// weird stuff happens when you try to work with the binary string directly.
		// It is known.
		// From http://stackoverflow.com/questions/14967647/ (continues on next line)
		// encode-decode-image-with-base64-breaks-image (2013-04-21)
		function _binStringToArrayBuffer(bin) {
		    var length = bin.length;
		    var buf = new ArrayBuffer(length);
		    var arr = new Uint8Array(buf);
		    for (var i = 0; i < length; i++) {
		        arr[i] = bin.charCodeAt(i);
		    }
		    return buf;
		}

		//
		// Blobs are not supported in all versions of IndexedDB, notably
		// Chrome <37 and Android <5. In those versions, storing a blob will throw.
		//
		// Various other blob bugs exist in Chrome v37-42 (inclusive).
		// Detecting them is expensive and confusing to users, and Chrome 37-42
		// is at very low usage worldwide, so we do a hacky userAgent check instead.
		//
		// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
		// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
		// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
		//
		// Code borrowed from PouchDB. See:
		// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
		//
		function _checkBlobSupportWithoutCaching(idb) {
		    return new Promise$1(function (resolve) {
		        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
		        var blob = createBlob(['']);
		        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

		        txn.onabort = function (e) {
		            // If the transaction aborts now its due to not being able to
		            // write to the database, likely due to the disk being full
		            e.preventDefault();
		            e.stopPropagation();
		            resolve(false);
		        };

		        txn.oncomplete = function () {
		            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
		            var matchedEdge = navigator.userAgent.match(/Edge\//);
		            // MS Edge pretends to be Chrome 42:
		            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
		            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
		        };
		    })["catch"](function () {
		        return false; // error, so assume unsupported
		    });
		}

		function _checkBlobSupport(idb) {
		    if (typeof supportsBlobs === 'boolean') {
		        return Promise$1.resolve(supportsBlobs);
		    }
		    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
		        supportsBlobs = value;
		        return supportsBlobs;
		    });
		}

		function _deferReadiness(dbInfo) {
		    var dbContext = dbContexts[dbInfo.name];

		    // Create a deferred object representing the current database operation.
		    var deferredOperation = {};

		    deferredOperation.promise = new Promise$1(function (resolve, reject) {
		        deferredOperation.resolve = resolve;
		        deferredOperation.reject = reject;
		    });

		    // Enqueue the deferred operation.
		    dbContext.deferredOperations.push(deferredOperation);

		    // Chain its promise to the database readiness.
		    if (!dbContext.dbReady) {
		        dbContext.dbReady = deferredOperation.promise;
		    } else {
		        dbContext.dbReady = dbContext.dbReady.then(function () {
		            return deferredOperation.promise;
		        });
		    }
		}

		function _advanceReadiness(dbInfo) {
		    var dbContext = dbContexts[dbInfo.name];

		    // Dequeue a deferred operation.
		    var deferredOperation = dbContext.deferredOperations.pop();

		    // Resolve its promise (which is part of the database readiness
		    // chain of promises).
		    if (deferredOperation) {
		        deferredOperation.resolve();
		        return deferredOperation.promise;
		    }
		}

		function _rejectReadiness(dbInfo, err) {
		    var dbContext = dbContexts[dbInfo.name];

		    // Dequeue a deferred operation.
		    var deferredOperation = dbContext.deferredOperations.pop();

		    // Reject its promise (which is part of the database readiness
		    // chain of promises).
		    if (deferredOperation) {
		        deferredOperation.reject(err);
		        return deferredOperation.promise;
		    }
		}

		function _getConnection(dbInfo, upgradeNeeded) {
		    return new Promise$1(function (resolve, reject) {
		        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

		        if (dbInfo.db) {
		            if (upgradeNeeded) {
		                _deferReadiness(dbInfo);
		                dbInfo.db.close();
		            } else {
		                return resolve(dbInfo.db);
		            }
		        }

		        var dbArgs = [dbInfo.name];

		        if (upgradeNeeded) {
		            dbArgs.push(dbInfo.version);
		        }

		        var openreq = idb.open.apply(idb, dbArgs);

		        if (upgradeNeeded) {
		            openreq.onupgradeneeded = function (e) {
		                var db = openreq.result;
		                try {
		                    db.createObjectStore(dbInfo.storeName);
		                    if (e.oldVersion <= 1) {
		                        // Added when support for blob shims was added
		                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
		                    }
		                } catch (ex) {
		                    if (ex.name === 'ConstraintError') {
		                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
		                    } else {
		                        throw ex;
		                    }
		                }
		            };
		        }

		        openreq.onerror = function (e) {
		            e.preventDefault();
		            reject(openreq.error);
		        };

		        openreq.onsuccess = function () {
		            var db = openreq.result;
		            db.onversionchange = function (e) {
		                // Triggered when the database is modified (e.g. adding an objectStore) or
		                // deleted (even when initiated by other sessions in different tabs).
		                // Closing the connection here prevents those operations from being blocked.
		                // If the database is accessed again later by this instance, the connection
		                // will be reopened or the database recreated as needed.
		                e.target.close();
		            };
		            resolve(db);
		            _advanceReadiness(dbInfo);
		        };
		    });
		}

		function _getOriginalConnection(dbInfo) {
		    return _getConnection(dbInfo, false);
		}

		function _getUpgradedConnection(dbInfo) {
		    return _getConnection(dbInfo, true);
		}

		function _isUpgradeNeeded(dbInfo, defaultVersion) {
		    if (!dbInfo.db) {
		        return true;
		    }

		    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
		    var isDowngrade = dbInfo.version < dbInfo.db.version;
		    var isUpgrade = dbInfo.version > dbInfo.db.version;

		    if (isDowngrade) {
		        // If the version is not the default one
		        // then warn for impossible downgrade.
		        if (dbInfo.version !== defaultVersion) {
		            console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
		        }
		        // Align the versions to prevent errors.
		        dbInfo.version = dbInfo.db.version;
		    }

		    if (isUpgrade || isNewStore) {
		        // If the store is new then increment the version (if needed).
		        // This will trigger an "upgradeneeded" event which is required
		        // for creating a store.
		        if (isNewStore) {
		            var incVersion = dbInfo.db.version + 1;
		            if (incVersion > dbInfo.version) {
		                dbInfo.version = incVersion;
		            }
		        }

		        return true;
		    }

		    return false;
		}

		// encode a blob for indexeddb engines that don't support blobs
		function _encodeBlob(blob) {
		    return new Promise$1(function (resolve, reject) {
		        var reader = new FileReader();
		        reader.onerror = reject;
		        reader.onloadend = function (e) {
		            var base64 = btoa(e.target.result || '');
		            resolve({
		                __local_forage_encoded_blob: true,
		                data: base64,
		                type: blob.type
		            });
		        };
		        reader.readAsBinaryString(blob);
		    });
		}

		// decode an encoded blob
		function _decodeBlob(encodedBlob) {
		    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
		    return createBlob([arrayBuff], { type: encodedBlob.type });
		}

		// is this one of our fancy encoded blobs?
		function _isEncodedBlob(value) {
		    return value && value.__local_forage_encoded_blob;
		}

		// Specialize the default `ready()` function by making it dependent
		// on the current database operations. Thus, the driver will be actually
		// ready when it's been initialized (default) *and* there are no pending
		// operations on the database (initiated by some other instances).
		function _fullyReady(callback) {
		    var self = this;

		    var promise = self._initReady().then(function () {
		        var dbContext = dbContexts[self._dbInfo.name];

		        if (dbContext && dbContext.dbReady) {
		            return dbContext.dbReady;
		        }
		    });

		    executeTwoCallbacks(promise, callback, callback);
		    return promise;
		}

		// Try to establish a new db connection to replace the
		// current one which is broken (i.e. experiencing
		// InvalidStateError while creating a transaction).
		function _tryReconnect(dbInfo) {
		    _deferReadiness(dbInfo);

		    var dbContext = dbContexts[dbInfo.name];
		    var forages = dbContext.forages;

		    for (var i = 0; i < forages.length; i++) {
		        var forage = forages[i];
		        if (forage._dbInfo.db) {
		            forage._dbInfo.db.close();
		            forage._dbInfo.db = null;
		        }
		    }
		    dbInfo.db = null;

		    return _getOriginalConnection(dbInfo).then(function (db) {
		        dbInfo.db = db;
		        if (_isUpgradeNeeded(dbInfo)) {
		            // Reopen the database for upgrading.
		            return _getUpgradedConnection(dbInfo);
		        }
		        return db;
		    }).then(function (db) {
		        // store the latest db reference
		        // in case the db was upgraded
		        dbInfo.db = dbContext.db = db;
		        for (var i = 0; i < forages.length; i++) {
		            forages[i]._dbInfo.db = db;
		        }
		    })["catch"](function (err) {
		        _rejectReadiness(dbInfo, err);
		        throw err;
		    });
		}

		// FF doesn't like Promises (micro-tasks) and IDDB store operations,
		// so we have to do it with callbacks
		function createTransaction(dbInfo, mode, callback, retries) {
		    if (retries === undefined) {
		        retries = 1;
		    }

		    try {
		        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
		        callback(null, tx);
		    } catch (err) {
		        if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
		            return Promise$1.resolve().then(function () {
		                if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
		                    // increase the db version, to create the new ObjectStore
		                    if (dbInfo.db) {
		                        dbInfo.version = dbInfo.db.version + 1;
		                    }
		                    // Reopen the database for upgrading.
		                    return _getUpgradedConnection(dbInfo);
		                }
		            }).then(function () {
		                return _tryReconnect(dbInfo).then(function () {
		                    createTransaction(dbInfo, mode, callback, retries - 1);
		                });
		            })["catch"](callback);
		        }

		        callback(err);
		    }
		}

		function createDbContext() {
		    return {
		        // Running localForages sharing a database.
		        forages: [],
		        // Shared database.
		        db: null,
		        // Database readiness (promise).
		        dbReady: null,
		        // Deferred operations on the database.
		        deferredOperations: []
		    };
		}

		// Open the IndexedDB database (automatically creates one if one didn't
		// previously exist), using any options set in the config.
		function _initStorage(options) {
		    var self = this;
		    var dbInfo = {
		        db: null
		    };

		    if (options) {
		        for (var i in options) {
		            dbInfo[i] = options[i];
		        }
		    }

		    // Get the current context of the database;
		    var dbContext = dbContexts[dbInfo.name];

		    // ...or create a new context.
		    if (!dbContext) {
		        dbContext = createDbContext();
		        // Register the new context in the global container.
		        dbContexts[dbInfo.name] = dbContext;
		    }

		    // Register itself as a running localForage in the current context.
		    dbContext.forages.push(self);

		    // Replace the default `ready()` function with the specialized one.
		    if (!self._initReady) {
		        self._initReady = self.ready;
		        self.ready = _fullyReady;
		    }

		    // Create an array of initialization states of the related localForages.
		    var initPromises = [];

		    function ignoreErrors() {
		        // Don't handle errors here,
		        // just makes sure related localForages aren't pending.
		        return Promise$1.resolve();
		    }

		    for (var j = 0; j < dbContext.forages.length; j++) {
		        var forage = dbContext.forages[j];
		        if (forage !== self) {
		            // Don't wait for itself...
		            initPromises.push(forage._initReady()["catch"](ignoreErrors));
		        }
		    }

		    // Take a snapshot of the related localForages.
		    var forages = dbContext.forages.slice(0);

		    // Initialize the connection process only when
		    // all the related localForages aren't pending.
		    return Promise$1.all(initPromises).then(function () {
		        dbInfo.db = dbContext.db;
		        // Get the connection or open a new one without upgrade.
		        return _getOriginalConnection(dbInfo);
		    }).then(function (db) {
		        dbInfo.db = db;
		        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
		            // Reopen the database for upgrading.
		            return _getUpgradedConnection(dbInfo);
		        }
		        return db;
		    }).then(function (db) {
		        dbInfo.db = dbContext.db = db;
		        self._dbInfo = dbInfo;
		        // Share the final connection amongst related localForages.
		        for (var k = 0; k < forages.length; k++) {
		            var forage = forages[k];
		            if (forage !== self) {
		                // Self is already up-to-date.
		                forage._dbInfo.db = dbInfo.db;
		                forage._dbInfo.version = dbInfo.version;
		            }
		        }
		    });
		}

		function getItem(key, callback) {
		    var self = this;

		    key = normalizeKey(key);

		    var promise = new Promise$1(function (resolve, reject) {
		        self.ready().then(function () {
		            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
		                if (err) {
		                    return reject(err);
		                }

		                try {
		                    var store = transaction.objectStore(self._dbInfo.storeName);
		                    var req = store.get(key);

		                    req.onsuccess = function () {
		                        var value = req.result;
		                        if (value === undefined) {
		                            value = null;
		                        }
		                        if (_isEncodedBlob(value)) {
		                            value = _decodeBlob(value);
		                        }
		                        resolve(value);
		                    };

		                    req.onerror = function () {
		                        reject(req.error);
		                    };
		                } catch (e) {
		                    reject(e);
		                }
		            });
		        })["catch"](reject);
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		// Iterate over all items stored in database.
		function iterate(iterator, callback) {
		    var self = this;

		    var promise = new Promise$1(function (resolve, reject) {
		        self.ready().then(function () {
		            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
		                if (err) {
		                    return reject(err);
		                }

		                try {
		                    var store = transaction.objectStore(self._dbInfo.storeName);
		                    var req = store.openCursor();
		                    var iterationNumber = 1;

		                    req.onsuccess = function () {
		                        var cursor = req.result;

		                        if (cursor) {
		                            var value = cursor.value;
		                            if (_isEncodedBlob(value)) {
		                                value = _decodeBlob(value);
		                            }
		                            var result = iterator(value, cursor.key, iterationNumber++);

		                            // when the iterator callback returns any
		                            // (non-`undefined`) value, then we stop
		                            // the iteration immediately
		                            if (result !== void 0) {
		                                resolve(result);
		                            } else {
		                                cursor["continue"]();
		                            }
		                        } else {
		                            resolve();
		                        }
		                    };

		                    req.onerror = function () {
		                        reject(req.error);
		                    };
		                } catch (e) {
		                    reject(e);
		                }
		            });
		        })["catch"](reject);
		    });

		    executeCallback(promise, callback);

		    return promise;
		}

		function setItem(key, value, callback) {
		    var self = this;

		    key = normalizeKey(key);

		    var promise = new Promise$1(function (resolve, reject) {
		        var dbInfo;
		        self.ready().then(function () {
		            dbInfo = self._dbInfo;
		            if (toString.call(value) === '[object Blob]') {
		                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
		                    if (blobSupport) {
		                        return value;
		                    }
		                    return _encodeBlob(value);
		                });
		            }
		            return value;
		        }).then(function (value) {
		            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
		                if (err) {
		                    return reject(err);
		                }

		                try {
		                    var store = transaction.objectStore(self._dbInfo.storeName);

		                    // The reason we don't _save_ null is because IE 10 does
		                    // not support saving the `null` type in IndexedDB. How
		                    // ironic, given the bug below!
		                    // See: https://github.com/mozilla/localForage/issues/161
		                    if (value === null) {
		                        value = undefined;
		                    }

		                    var req = store.put(value, key);

		                    transaction.oncomplete = function () {
		                        // Cast to undefined so the value passed to
		                        // callback/promise is the same as what one would get out
		                        // of `getItem()` later. This leads to some weirdness
		                        // (setItem('foo', undefined) will return `null`), but
		                        // it's not my fault localStorage is our baseline and that
		                        // it's weird.
		                        if (value === undefined) {
		                            value = null;
		                        }

		                        resolve(value);
		                    };
		                    transaction.onabort = transaction.onerror = function () {
		                        var err = req.error ? req.error : req.transaction.error;
		                        reject(err);
		                    };
		                } catch (e) {
		                    reject(e);
		                }
		            });
		        })["catch"](reject);
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		function removeItem(key, callback) {
		    var self = this;

		    key = normalizeKey(key);

		    var promise = new Promise$1(function (resolve, reject) {
		        self.ready().then(function () {
		            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
		                if (err) {
		                    return reject(err);
		                }

		                try {
		                    var store = transaction.objectStore(self._dbInfo.storeName);
		                    // We use a Grunt task to make this safe for IE and some
		                    // versions of Android (including those used by Cordova).
		                    // Normally IE won't like `.delete()` and will insist on
		                    // using `['delete']()`, but we have a build step that
		                    // fixes this for us now.
		                    var req = store["delete"](key);
		                    transaction.oncomplete = function () {
		                        resolve();
		                    };

		                    transaction.onerror = function () {
		                        reject(req.error);
		                    };

		                    // The request will be also be aborted if we've exceeded our storage
		                    // space.
		                    transaction.onabort = function () {
		                        var err = req.error ? req.error : req.transaction.error;
		                        reject(err);
		                    };
		                } catch (e) {
		                    reject(e);
		                }
		            });
		        })["catch"](reject);
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		function clear(callback) {
		    var self = this;

		    var promise = new Promise$1(function (resolve, reject) {
		        self.ready().then(function () {
		            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
		                if (err) {
		                    return reject(err);
		                }

		                try {
		                    var store = transaction.objectStore(self._dbInfo.storeName);
		                    var req = store.clear();

		                    transaction.oncomplete = function () {
		                        resolve();
		                    };

		                    transaction.onabort = transaction.onerror = function () {
		                        var err = req.error ? req.error : req.transaction.error;
		                        reject(err);
		                    };
		                } catch (e) {
		                    reject(e);
		                }
		            });
		        })["catch"](reject);
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		function length(callback) {
		    var self = this;

		    var promise = new Promise$1(function (resolve, reject) {
		        self.ready().then(function () {
		            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
		                if (err) {
		                    return reject(err);
		                }

		                try {
		                    var store = transaction.objectStore(self._dbInfo.storeName);
		                    var req = store.count();

		                    req.onsuccess = function () {
		                        resolve(req.result);
		                    };

		                    req.onerror = function () {
		                        reject(req.error);
		                    };
		                } catch (e) {
		                    reject(e);
		                }
		            });
		        })["catch"](reject);
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		function key(n, callback) {
		    var self = this;

		    var promise = new Promise$1(function (resolve, reject) {
		        if (n < 0) {
		            resolve(null);

		            return;
		        }

		        self.ready().then(function () {
		            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
		                if (err) {
		                    return reject(err);
		                }

		                try {
		                    var store = transaction.objectStore(self._dbInfo.storeName);
		                    var advanced = false;
		                    var req = store.openKeyCursor();

		                    req.onsuccess = function () {
		                        var cursor = req.result;
		                        if (!cursor) {
		                            // this means there weren't enough keys
		                            resolve(null);

		                            return;
		                        }

		                        if (n === 0) {
		                            // We have the first key, return it if that's what they
		                            // wanted.
		                            resolve(cursor.key);
		                        } else {
		                            if (!advanced) {
		                                // Otherwise, ask the cursor to skip ahead n
		                                // records.
		                                advanced = true;
		                                cursor.advance(n);
		                            } else {
		                                // When we get here, we've got the nth key.
		                                resolve(cursor.key);
		                            }
		                        }
		                    };

		                    req.onerror = function () {
		                        reject(req.error);
		                    };
		                } catch (e) {
		                    reject(e);
		                }
		            });
		        })["catch"](reject);
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		function keys(callback) {
		    var self = this;

		    var promise = new Promise$1(function (resolve, reject) {
		        self.ready().then(function () {
		            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
		                if (err) {
		                    return reject(err);
		                }

		                try {
		                    var store = transaction.objectStore(self._dbInfo.storeName);
		                    var req = store.openKeyCursor();
		                    var keys = [];

		                    req.onsuccess = function () {
		                        var cursor = req.result;

		                        if (!cursor) {
		                            resolve(keys);
		                            return;
		                        }

		                        keys.push(cursor.key);
		                        cursor["continue"]();
		                    };

		                    req.onerror = function () {
		                        reject(req.error);
		                    };
		                } catch (e) {
		                    reject(e);
		                }
		            });
		        })["catch"](reject);
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		function dropInstance(options, callback) {
		    callback = getCallback.apply(this, arguments);

		    var currentConfig = this.config();
		    options = typeof options !== 'function' && options || {};
		    if (!options.name) {
		        options.name = options.name || currentConfig.name;
		        options.storeName = options.storeName || currentConfig.storeName;
		    }

		    var self = this;
		    var promise;
		    if (!options.name) {
		        promise = Promise$1.reject('Invalid arguments');
		    } else {
		        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

		        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
		            var dbContext = dbContexts[options.name];
		            var forages = dbContext.forages;
		            dbContext.db = db;
		            for (var i = 0; i < forages.length; i++) {
		                forages[i]._dbInfo.db = db;
		            }
		            return db;
		        });

		        if (!options.storeName) {
		            promise = dbPromise.then(function (db) {
		                _deferReadiness(options);

		                var dbContext = dbContexts[options.name];
		                var forages = dbContext.forages;

		                db.close();
		                for (var i = 0; i < forages.length; i++) {
		                    var forage = forages[i];
		                    forage._dbInfo.db = null;
		                }

		                var dropDBPromise = new Promise$1(function (resolve, reject) {
		                    var req = idb.deleteDatabase(options.name);

		                    req.onerror = function () {
		                        var db = req.result;
		                        if (db) {
		                            db.close();
		                        }
		                        reject(req.error);
		                    };

		                    req.onblocked = function () {
		                        // Closing all open connections in onversionchange handler should prevent this situation, but if
		                        // we do get here, it just means the request remains pending - eventually it will succeed or error
		                        console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
		                    };

		                    req.onsuccess = function () {
		                        var db = req.result;
		                        if (db) {
		                            db.close();
		                        }
		                        resolve(db);
		                    };
		                });

		                return dropDBPromise.then(function (db) {
		                    dbContext.db = db;
		                    for (var i = 0; i < forages.length; i++) {
		                        var _forage = forages[i];
		                        _advanceReadiness(_forage._dbInfo);
		                    }
		                })["catch"](function (err) {
		                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
		                    throw err;
		                });
		            });
		        } else {
		            promise = dbPromise.then(function (db) {
		                if (!db.objectStoreNames.contains(options.storeName)) {
		                    return;
		                }

		                var newVersion = db.version + 1;

		                _deferReadiness(options);

		                var dbContext = dbContexts[options.name];
		                var forages = dbContext.forages;

		                db.close();
		                for (var i = 0; i < forages.length; i++) {
		                    var forage = forages[i];
		                    forage._dbInfo.db = null;
		                    forage._dbInfo.version = newVersion;
		                }

		                var dropObjectPromise = new Promise$1(function (resolve, reject) {
		                    var req = idb.open(options.name, newVersion);

		                    req.onerror = function (err) {
		                        var db = req.result;
		                        db.close();
		                        reject(err);
		                    };

		                    req.onupgradeneeded = function () {
		                        var db = req.result;
		                        db.deleteObjectStore(options.storeName);
		                    };

		                    req.onsuccess = function () {
		                        var db = req.result;
		                        db.close();
		                        resolve(db);
		                    };
		                });

		                return dropObjectPromise.then(function (db) {
		                    dbContext.db = db;
		                    for (var j = 0; j < forages.length; j++) {
		                        var _forage2 = forages[j];
		                        _forage2._dbInfo.db = db;
		                        _advanceReadiness(_forage2._dbInfo);
		                    }
		                })["catch"](function (err) {
		                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
		                    throw err;
		                });
		            });
		        }
		    }

		    executeCallback(promise, callback);
		    return promise;
		}

		var asyncStorage = {
		    _driver: 'asyncStorage',
		    _initStorage: _initStorage,
		    _support: isIndexedDBValid(),
		    iterate: iterate,
		    getItem: getItem,
		    setItem: setItem,
		    removeItem: removeItem,
		    clear: clear,
		    length: length,
		    key: key,
		    keys: keys,
		    dropInstance: dropInstance
		};

		function isWebSQLValid() {
		    return typeof openDatabase === 'function';
		}

		// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
		// it to Base64, so this is how we store it to prevent very strange errors with less
		// verbose ways of binary <-> string data storage.
		var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

		var BLOB_TYPE_PREFIX = '~~local_forage_type~';
		var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

		var SERIALIZED_MARKER = '__lfsc__:';
		var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

		// OMG the serializations!
		var TYPE_ARRAYBUFFER = 'arbf';
		var TYPE_BLOB = 'blob';
		var TYPE_INT8ARRAY = 'si08';
		var TYPE_UINT8ARRAY = 'ui08';
		var TYPE_UINT8CLAMPEDARRAY = 'uic8';
		var TYPE_INT16ARRAY = 'si16';
		var TYPE_INT32ARRAY = 'si32';
		var TYPE_UINT16ARRAY = 'ur16';
		var TYPE_UINT32ARRAY = 'ui32';
		var TYPE_FLOAT32ARRAY = 'fl32';
		var TYPE_FLOAT64ARRAY = 'fl64';
		var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

		var toString$1 = Object.prototype.toString;

		function stringToBuffer(serializedString) {
		    // Fill the string into a ArrayBuffer.
		    var bufferLength = serializedString.length * 0.75;
		    var len = serializedString.length;
		    var i;
		    var p = 0;
		    var encoded1, encoded2, encoded3, encoded4;

		    if (serializedString[serializedString.length - 1] === '=') {
		        bufferLength--;
		        if (serializedString[serializedString.length - 2] === '=') {
		            bufferLength--;
		        }
		    }

		    var buffer = new ArrayBuffer(bufferLength);
		    var bytes = new Uint8Array(buffer);

		    for (i = 0; i < len; i += 4) {
		        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
		        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
		        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
		        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

		        /*jslint bitwise: true */
		        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
		        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
		        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
		    }
		    return buffer;
		}

		// Converts a buffer to a string to store, serialized, in the backend
		// storage library.
		function bufferToString(buffer) {
		    // base64-arraybuffer
		    var bytes = new Uint8Array(buffer);
		    var base64String = '';
		    var i;

		    for (i = 0; i < bytes.length; i += 3) {
		        /*jslint bitwise: true */
		        base64String += BASE_CHARS[bytes[i] >> 2];
		        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
		        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
		        base64String += BASE_CHARS[bytes[i + 2] & 63];
		    }

		    if (bytes.length % 3 === 2) {
		        base64String = base64String.substring(0, base64String.length - 1) + '=';
		    } else if (bytes.length % 3 === 1) {
		        base64String = base64String.substring(0, base64String.length - 2) + '==';
		    }

		    return base64String;
		}

		// Serialize a value, afterwards executing a callback (which usually
		// instructs the `setItem()` callback/promise to be executed). This is how
		// we store binary data with localStorage.
		function serialize(value, callback) {
		    var valueType = '';
		    if (value) {
		        valueType = toString$1.call(value);
		    }

		    // Cannot use `value instanceof ArrayBuffer` or such here, as these
		    // checks fail when running the tests using casper.js...
		    //
		    // TODO: See why those tests fail and use a better solution.
		    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
		        // Convert binary arrays to a string and prefix the string with
		        // a special marker.
		        var buffer;
		        var marker = SERIALIZED_MARKER;

		        if (value instanceof ArrayBuffer) {
		            buffer = value;
		            marker += TYPE_ARRAYBUFFER;
		        } else {
		            buffer = value.buffer;

		            if (valueType === '[object Int8Array]') {
		                marker += TYPE_INT8ARRAY;
		            } else if (valueType === '[object Uint8Array]') {
		                marker += TYPE_UINT8ARRAY;
		            } else if (valueType === '[object Uint8ClampedArray]') {
		                marker += TYPE_UINT8CLAMPEDARRAY;
		            } else if (valueType === '[object Int16Array]') {
		                marker += TYPE_INT16ARRAY;
		            } else if (valueType === '[object Uint16Array]') {
		                marker += TYPE_UINT16ARRAY;
		            } else if (valueType === '[object Int32Array]') {
		                marker += TYPE_INT32ARRAY;
		            } else if (valueType === '[object Uint32Array]') {
		                marker += TYPE_UINT32ARRAY;
		            } else if (valueType === '[object Float32Array]') {
		                marker += TYPE_FLOAT32ARRAY;
		            } else if (valueType === '[object Float64Array]') {
		                marker += TYPE_FLOAT64ARRAY;
		            } else {
		                callback(new Error('Failed to get type for BinaryArray'));
		            }
		        }

		        callback(marker + bufferToString(buffer));
		    } else if (valueType === '[object Blob]') {
		        // Conver the blob to a binaryArray and then to a string.
		        var fileReader = new FileReader();

		        fileReader.onload = function () {
		            // Backwards-compatible prefix for the blob type.
		            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

		            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
		        };

		        fileReader.readAsArrayBuffer(value);
		    } else {
		        try {
		            callback(JSON.stringify(value));
		        } catch (e) {
		            console.error("Couldn't convert value into a JSON string: ", value);

		            callback(null, e);
		        }
		    }
		}

		// Deserialize data we've inserted into a value column/field. We place
		// special markers into our strings to mark them as encoded; this isn't
		// as nice as a meta field, but it's the only sane thing we can do whilst
		// keeping localStorage support intact.
		//
		// Oftentimes this will just deserialize JSON content, but if we have a
		// special marker (SERIALIZED_MARKER, defined above), we will extract
		// some kind of arraybuffer/binary data/typed array out of the string.
		function deserialize(value) {
		    // If we haven't marked this string as being specially serialized (i.e.
		    // something other than serialized JSON), we can just return it and be
		    // done with it.
		    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
		        return JSON.parse(value);
		    }

		    // The following code deals with deserializing some kind of Blob or
		    // TypedArray. First we separate out the type of data we're dealing
		    // with from the data itself.
		    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
		    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

		    var blobType;
		    // Backwards-compatible blob type serialization strategy.
		    // DBs created with older versions of localForage will simply not have the blob type.
		    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
		        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
		        blobType = matcher[1];
		        serializedString = serializedString.substring(matcher[0].length);
		    }
		    var buffer = stringToBuffer(serializedString);

		    // Return the right type based on the code/type set during
		    // serialization.
		    switch (type) {
		        case TYPE_ARRAYBUFFER:
		            return buffer;
		        case TYPE_BLOB:
		            return createBlob([buffer], { type: blobType });
		        case TYPE_INT8ARRAY:
		            return new Int8Array(buffer);
		        case TYPE_UINT8ARRAY:
		            return new Uint8Array(buffer);
		        case TYPE_UINT8CLAMPEDARRAY:
		            return new Uint8ClampedArray(buffer);
		        case TYPE_INT16ARRAY:
		            return new Int16Array(buffer);
		        case TYPE_UINT16ARRAY:
		            return new Uint16Array(buffer);
		        case TYPE_INT32ARRAY:
		            return new Int32Array(buffer);
		        case TYPE_UINT32ARRAY:
		            return new Uint32Array(buffer);
		        case TYPE_FLOAT32ARRAY:
		            return new Float32Array(buffer);
		        case TYPE_FLOAT64ARRAY:
		            return new Float64Array(buffer);
		        default:
		            throw new Error('Unkown type: ' + type);
		    }
		}

		var localforageSerializer = {
		    serialize: serialize,
		    deserialize: deserialize,
		    stringToBuffer: stringToBuffer,
		    bufferToString: bufferToString
		};

		/*
		 * Includes code from:
		 *
		 * base64-arraybuffer
		 * https://github.com/niklasvh/base64-arraybuffer
		 *
		 * Copyright (c) 2012 Niklas von Hertzen
		 * Licensed under the MIT license.
		 */

		function createDbTable(t, dbInfo, callback, errorCallback) {
		    t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
		}

		// Open the WebSQL database (automatically creates one if one didn't
		// previously exist), using any options set in the config.
		function _initStorage$1(options) {
		    var self = this;
		    var dbInfo = {
		        db: null
		    };

		    if (options) {
		        for (var i in options) {
		            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
		        }
		    }

		    var dbInfoPromise = new Promise$1(function (resolve, reject) {
		        // Open the database; the openDatabase API will automatically
		        // create it for us if it doesn't exist.
		        try {
		            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
		        } catch (e) {
		            return reject(e);
		        }

		        // Create our key/value table if it doesn't exist.
		        dbInfo.db.transaction(function (t) {
		            createDbTable(t, dbInfo, function () {
		                self._dbInfo = dbInfo;
		                resolve();
		            }, function (t, error) {
		                reject(error);
		            });
		        }, reject);
		    });

		    dbInfo.serializer = localforageSerializer;
		    return dbInfoPromise;
		}

		function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
		    t.executeSql(sqlStatement, args, callback, function (t, error) {
		        if (error.code === error.SYNTAX_ERR) {
		            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
		                if (!results.rows.length) {
		                    // if the table is missing (was deleted)
		                    // re-create it table and retry
		                    createDbTable(t, dbInfo, function () {
		                        t.executeSql(sqlStatement, args, callback, errorCallback);
		                    }, errorCallback);
		                } else {
		                    errorCallback(t, error);
		                }
		            }, errorCallback);
		        } else {
		            errorCallback(t, error);
		        }
		    }, errorCallback);
		}

		function getItem$1(key, callback) {
		    var self = this;

		    key = normalizeKey(key);

		    var promise = new Promise$1(function (resolve, reject) {
		        self.ready().then(function () {
		            var dbInfo = self._dbInfo;
		            dbInfo.db.transaction(function (t) {
		                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
		                    var result = results.rows.length ? results.rows.item(0).value : null;

		                    // Check to see if this is serialized content we need to
		                    // unpack.
		                    if (result) {
		                        result = dbInfo.serializer.deserialize(result);
		                    }

		                    resolve(result);
		                }, function (t, error) {
		                    reject(error);
		                });
		            });
		        })["catch"](reject);
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		function iterate$1(iterator, callback) {
		    var self = this;

		    var promise = new Promise$1(function (resolve, reject) {
		        self.ready().then(function () {
		            var dbInfo = self._dbInfo;

		            dbInfo.db.transaction(function (t) {
		                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
		                    var rows = results.rows;
		                    var length = rows.length;

		                    for (var i = 0; i < length; i++) {
		                        var item = rows.item(i);
		                        var result = item.value;

		                        // Check to see if this is serialized content
		                        // we need to unpack.
		                        if (result) {
		                            result = dbInfo.serializer.deserialize(result);
		                        }

		                        result = iterator(result, item.key, i + 1);

		                        // void(0) prevents problems with redefinition
		                        // of `undefined`.
		                        if (result !== void 0) {
		                            resolve(result);
		                            return;
		                        }
		                    }

		                    resolve();
		                }, function (t, error) {
		                    reject(error);
		                });
		            });
		        })["catch"](reject);
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		function _setItem(key, value, callback, retriesLeft) {
		    var self = this;

		    key = normalizeKey(key);

		    var promise = new Promise$1(function (resolve, reject) {
		        self.ready().then(function () {
		            // The localStorage API doesn't return undefined values in an
		            // "expected" way, so undefined is always cast to null in all
		            // drivers. See: https://github.com/mozilla/localForage/pull/42
		            if (value === undefined) {
		                value = null;
		            }

		            // Save the original value to pass to the callback.
		            var originalValue = value;

		            var dbInfo = self._dbInfo;
		            dbInfo.serializer.serialize(value, function (value, error) {
		                if (error) {
		                    reject(error);
		                } else {
		                    dbInfo.db.transaction(function (t) {
		                        tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
		                            resolve(originalValue);
		                        }, function (t, error) {
		                            reject(error);
		                        });
		                    }, function (sqlError) {
		                        // The transaction failed; check
		                        // to see if it's a quota error.
		                        if (sqlError.code === sqlError.QUOTA_ERR) {
		                            // We reject the callback outright for now, but
		                            // it's worth trying to re-run the transaction.
		                            // Even if the user accepts the prompt to use
		                            // more storage on Safari, this error will
		                            // be called.
		                            //
		                            // Try to re-run the transaction.
		                            if (retriesLeft > 0) {
		                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
		                                return;
		                            }
		                            reject(sqlError);
		                        }
		                    });
		                }
		            });
		        })["catch"](reject);
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		function setItem$1(key, value, callback) {
		    return _setItem.apply(this, [key, value, callback, 1]);
		}

		function removeItem$1(key, callback) {
		    var self = this;

		    key = normalizeKey(key);

		    var promise = new Promise$1(function (resolve, reject) {
		        self.ready().then(function () {
		            var dbInfo = self._dbInfo;
		            dbInfo.db.transaction(function (t) {
		                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
		                    resolve();
		                }, function (t, error) {
		                    reject(error);
		                });
		            });
		        })["catch"](reject);
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		// Deletes every item in the table.
		// TODO: Find out if this resets the AUTO_INCREMENT number.
		function clear$1(callback) {
		    var self = this;

		    var promise = new Promise$1(function (resolve, reject) {
		        self.ready().then(function () {
		            var dbInfo = self._dbInfo;
		            dbInfo.db.transaction(function (t) {
		                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
		                    resolve();
		                }, function (t, error) {
		                    reject(error);
		                });
		            });
		        })["catch"](reject);
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		// Does a simple `COUNT(key)` to get the number of items stored in
		// localForage.
		function length$1(callback) {
		    var self = this;

		    var promise = new Promise$1(function (resolve, reject) {
		        self.ready().then(function () {
		            var dbInfo = self._dbInfo;
		            dbInfo.db.transaction(function (t) {
		                // Ahhh, SQL makes this one soooooo easy.
		                tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
		                    var result = results.rows.item(0).c;
		                    resolve(result);
		                }, function (t, error) {
		                    reject(error);
		                });
		            });
		        })["catch"](reject);
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		// Return the key located at key index X; essentially gets the key from a
		// `WHERE id = ?`. This is the most efficient way I can think to implement
		// this rarely-used (in my experience) part of the API, but it can seem
		// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
		// the ID of each key will change every time it's updated. Perhaps a stored
		// procedure for the `setItem()` SQL would solve this problem?
		// TODO: Don't change ID on `setItem()`.
		function key$1(n, callback) {
		    var self = this;

		    var promise = new Promise$1(function (resolve, reject) {
		        self.ready().then(function () {
		            var dbInfo = self._dbInfo;
		            dbInfo.db.transaction(function (t) {
		                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
		                    var result = results.rows.length ? results.rows.item(0).key : null;
		                    resolve(result);
		                }, function (t, error) {
		                    reject(error);
		                });
		            });
		        })["catch"](reject);
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		function keys$1(callback) {
		    var self = this;

		    var promise = new Promise$1(function (resolve, reject) {
		        self.ready().then(function () {
		            var dbInfo = self._dbInfo;
		            dbInfo.db.transaction(function (t) {
		                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
		                    var keys = [];

		                    for (var i = 0; i < results.rows.length; i++) {
		                        keys.push(results.rows.item(i).key);
		                    }

		                    resolve(keys);
		                }, function (t, error) {
		                    reject(error);
		                });
		            });
		        })["catch"](reject);
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		// https://www.w3.org/TR/webdatabase/#databases
		// > There is no way to enumerate or delete the databases available for an origin from this API.
		function getAllStoreNames(db) {
		    return new Promise$1(function (resolve, reject) {
		        db.transaction(function (t) {
		            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
		                var storeNames = [];

		                for (var i = 0; i < results.rows.length; i++) {
		                    storeNames.push(results.rows.item(i).name);
		                }

		                resolve({
		                    db: db,
		                    storeNames: storeNames
		                });
		            }, function (t, error) {
		                reject(error);
		            });
		        }, function (sqlError) {
		            reject(sqlError);
		        });
		    });
		}

		function dropInstance$1(options, callback) {
		    callback = getCallback.apply(this, arguments);

		    var currentConfig = this.config();
		    options = typeof options !== 'function' && options || {};
		    if (!options.name) {
		        options.name = options.name || currentConfig.name;
		        options.storeName = options.storeName || currentConfig.storeName;
		    }

		    var self = this;
		    var promise;
		    if (!options.name) {
		        promise = Promise$1.reject('Invalid arguments');
		    } else {
		        promise = new Promise$1(function (resolve) {
		            var db;
		            if (options.name === currentConfig.name) {
		                // use the db reference of the current instance
		                db = self._dbInfo.db;
		            } else {
		                db = openDatabase(options.name, '', '', 0);
		            }

		            if (!options.storeName) {
		                // drop all database tables
		                resolve(getAllStoreNames(db));
		            } else {
		                resolve({
		                    db: db,
		                    storeNames: [options.storeName]
		                });
		            }
		        }).then(function (operationInfo) {
		            return new Promise$1(function (resolve, reject) {
		                operationInfo.db.transaction(function (t) {
		                    function dropTable(storeName) {
		                        return new Promise$1(function (resolve, reject) {
		                            t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
		                                resolve();
		                            }, function (t, error) {
		                                reject(error);
		                            });
		                        });
		                    }

		                    var operations = [];
		                    for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
		                        operations.push(dropTable(operationInfo.storeNames[i]));
		                    }

		                    Promise$1.all(operations).then(function () {
		                        resolve();
		                    })["catch"](function (e) {
		                        reject(e);
		                    });
		                }, function (sqlError) {
		                    reject(sqlError);
		                });
		            });
		        });
		    }

		    executeCallback(promise, callback);
		    return promise;
		}

		var webSQLStorage = {
		    _driver: 'webSQLStorage',
		    _initStorage: _initStorage$1,
		    _support: isWebSQLValid(),
		    iterate: iterate$1,
		    getItem: getItem$1,
		    setItem: setItem$1,
		    removeItem: removeItem$1,
		    clear: clear$1,
		    length: length$1,
		    key: key$1,
		    keys: keys$1,
		    dropInstance: dropInstance$1
		};

		function isLocalStorageValid() {
		    try {
		        return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
		        // in IE8 typeof localStorage.setItem === 'object'
		        !!localStorage.setItem;
		    } catch (e) {
		        return false;
		    }
		}

		function _getKeyPrefix(options, defaultConfig) {
		    var keyPrefix = options.name + '/';

		    if (options.storeName !== defaultConfig.storeName) {
		        keyPrefix += options.storeName + '/';
		    }
		    return keyPrefix;
		}

		// Check if localStorage throws when saving an item
		function checkIfLocalStorageThrows() {
		    var localStorageTestKey = '_localforage_support_test';

		    try {
		        localStorage.setItem(localStorageTestKey, true);
		        localStorage.removeItem(localStorageTestKey);

		        return false;
		    } catch (e) {
		        return true;
		    }
		}

		// Check if localStorage is usable and allows to save an item
		// This method checks if localStorage is usable in Safari Private Browsing
		// mode, or in any other case where the available quota for localStorage
		// is 0 and there wasn't any saved items yet.
		function _isLocalStorageUsable() {
		    return !checkIfLocalStorageThrows() || localStorage.length > 0;
		}

		// Config the localStorage backend, using options set in the config.
		function _initStorage$2(options) {
		    var self = this;
		    var dbInfo = {};
		    if (options) {
		        for (var i in options) {
		            dbInfo[i] = options[i];
		        }
		    }

		    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

		    if (!_isLocalStorageUsable()) {
		        return Promise$1.reject();
		    }

		    self._dbInfo = dbInfo;
		    dbInfo.serializer = localforageSerializer;

		    return Promise$1.resolve();
		}

		// Remove all keys from the datastore, effectively destroying all data in
		// the app's key/value store!
		function clear$2(callback) {
		    var self = this;
		    var promise = self.ready().then(function () {
		        var keyPrefix = self._dbInfo.keyPrefix;

		        for (var i = localStorage.length - 1; i >= 0; i--) {
		            var key = localStorage.key(i);

		            if (key.indexOf(keyPrefix) === 0) {
		                localStorage.removeItem(key);
		            }
		        }
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		// Retrieve an item from the store. Unlike the original async_storage
		// library in Gaia, we don't modify return values at all. If a key's value
		// is `undefined`, we pass that value to the callback function.
		function getItem$2(key, callback) {
		    var self = this;

		    key = normalizeKey(key);

		    var promise = self.ready().then(function () {
		        var dbInfo = self._dbInfo;
		        var result = localStorage.getItem(dbInfo.keyPrefix + key);

		        // If a result was found, parse it from the serialized
		        // string into a JS object. If result isn't truthy, the key
		        // is likely undefined and we'll pass it straight to the
		        // callback.
		        if (result) {
		            result = dbInfo.serializer.deserialize(result);
		        }

		        return result;
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		// Iterate over all items in the store.
		function iterate$2(iterator, callback) {
		    var self = this;

		    var promise = self.ready().then(function () {
		        var dbInfo = self._dbInfo;
		        var keyPrefix = dbInfo.keyPrefix;
		        var keyPrefixLength = keyPrefix.length;
		        var length = localStorage.length;

		        // We use a dedicated iterator instead of the `i` variable below
		        // so other keys we fetch in localStorage aren't counted in
		        // the `iterationNumber` argument passed to the `iterate()`
		        // callback.
		        //
		        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
		        var iterationNumber = 1;

		        for (var i = 0; i < length; i++) {
		            var key = localStorage.key(i);
		            if (key.indexOf(keyPrefix) !== 0) {
		                continue;
		            }
		            var value = localStorage.getItem(key);

		            // If a result was found, parse it from the serialized
		            // string into a JS object. If result isn't truthy, the
		            // key is likely undefined and we'll pass it straight
		            // to the iterator.
		            if (value) {
		                value = dbInfo.serializer.deserialize(value);
		            }

		            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

		            if (value !== void 0) {
		                return value;
		            }
		        }
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		// Same as localStorage's key() method, except takes a callback.
		function key$2(n, callback) {
		    var self = this;
		    var promise = self.ready().then(function () {
		        var dbInfo = self._dbInfo;
		        var result;
		        try {
		            result = localStorage.key(n);
		        } catch (error) {
		            result = null;
		        }

		        // Remove the prefix from the key, if a key is found.
		        if (result) {
		            result = result.substring(dbInfo.keyPrefix.length);
		        }

		        return result;
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		function keys$2(callback) {
		    var self = this;
		    var promise = self.ready().then(function () {
		        var dbInfo = self._dbInfo;
		        var length = localStorage.length;
		        var keys = [];

		        for (var i = 0; i < length; i++) {
		            var itemKey = localStorage.key(i);
		            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
		                keys.push(itemKey.substring(dbInfo.keyPrefix.length));
		            }
		        }

		        return keys;
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		// Supply the number of keys in the datastore to the callback function.
		function length$2(callback) {
		    var self = this;
		    var promise = self.keys().then(function (keys) {
		        return keys.length;
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		// Remove an item from the store, nice and simple.
		function removeItem$2(key, callback) {
		    var self = this;

		    key = normalizeKey(key);

		    var promise = self.ready().then(function () {
		        var dbInfo = self._dbInfo;
		        localStorage.removeItem(dbInfo.keyPrefix + key);
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		// Set a key's value and run an optional callback once the value is set.
		// Unlike Gaia's implementation, the callback function is passed the value,
		// in case you want to operate on that value only after you're sure it
		// saved, or something like that.
		function setItem$2(key, value, callback) {
		    var self = this;

		    key = normalizeKey(key);

		    var promise = self.ready().then(function () {
		        // Convert undefined values to null.
		        // https://github.com/mozilla/localForage/pull/42
		        if (value === undefined) {
		            value = null;
		        }

		        // Save the original value to pass to the callback.
		        var originalValue = value;

		        return new Promise$1(function (resolve, reject) {
		            var dbInfo = self._dbInfo;
		            dbInfo.serializer.serialize(value, function (value, error) {
		                if (error) {
		                    reject(error);
		                } else {
		                    try {
		                        localStorage.setItem(dbInfo.keyPrefix + key, value);
		                        resolve(originalValue);
		                    } catch (e) {
		                        // localStorage capacity exceeded.
		                        // TODO: Make this a specific error/event.
		                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
		                            reject(e);
		                        }
		                        reject(e);
		                    }
		                }
		            });
		        });
		    });

		    executeCallback(promise, callback);
		    return promise;
		}

		function dropInstance$2(options, callback) {
		    callback = getCallback.apply(this, arguments);

		    options = typeof options !== 'function' && options || {};
		    if (!options.name) {
		        var currentConfig = this.config();
		        options.name = options.name || currentConfig.name;
		        options.storeName = options.storeName || currentConfig.storeName;
		    }

		    var self = this;
		    var promise;
		    if (!options.name) {
		        promise = Promise$1.reject('Invalid arguments');
		    } else {
		        promise = new Promise$1(function (resolve) {
		            if (!options.storeName) {
		                resolve(options.name + '/');
		            } else {
		                resolve(_getKeyPrefix(options, self._defaultConfig));
		            }
		        }).then(function (keyPrefix) {
		            for (var i = localStorage.length - 1; i >= 0; i--) {
		                var key = localStorage.key(i);

		                if (key.indexOf(keyPrefix) === 0) {
		                    localStorage.removeItem(key);
		                }
		            }
		        });
		    }

		    executeCallback(promise, callback);
		    return promise;
		}

		var localStorageWrapper = {
		    _driver: 'localStorageWrapper',
		    _initStorage: _initStorage$2,
		    _support: isLocalStorageValid(),
		    iterate: iterate$2,
		    getItem: getItem$2,
		    setItem: setItem$2,
		    removeItem: removeItem$2,
		    clear: clear$2,
		    length: length$2,
		    key: key$2,
		    keys: keys$2,
		    dropInstance: dropInstance$2
		};

		var sameValue = function sameValue(x, y) {
		    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
		};

		var includes = function includes(array, searchElement) {
		    var len = array.length;
		    var i = 0;
		    while (i < len) {
		        if (sameValue(array[i], searchElement)) {
		            return true;
		        }
		        i++;
		    }

		    return false;
		};

		var isArray = Array.isArray || function (arg) {
		    return Object.prototype.toString.call(arg) === '[object Array]';
		};

		// Drivers are stored here when `defineDriver()` is called.
		// They are shared across all instances of localForage.
		var DefinedDrivers = {};

		var DriverSupport = {};

		var DefaultDrivers = {
		    INDEXEDDB: asyncStorage,
		    WEBSQL: webSQLStorage,
		    LOCALSTORAGE: localStorageWrapper
		};

		var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

		var OptionalDriverMethods = ['dropInstance'];

		var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

		var DefaultConfig = {
		    description: '',
		    driver: DefaultDriverOrder.slice(),
		    name: 'localforage',
		    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
		    // we can use without a prompt.
		    size: 4980736,
		    storeName: 'keyvaluepairs',
		    version: 1.0
		};

		function callWhenReady(localForageInstance, libraryMethod) {
		    localForageInstance[libraryMethod] = function () {
		        var _args = arguments;
		        return localForageInstance.ready().then(function () {
		            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
		        });
		    };
		}

		function extend() {
		    for (var i = 1; i < arguments.length; i++) {
		        var arg = arguments[i];

		        if (arg) {
		            for (var _key in arg) {
		                if (arg.hasOwnProperty(_key)) {
		                    if (isArray(arg[_key])) {
		                        arguments[0][_key] = arg[_key].slice();
		                    } else {
		                        arguments[0][_key] = arg[_key];
		                    }
		                }
		            }
		        }
		    }

		    return arguments[0];
		}

		var LocalForage = function () {
		    function LocalForage(options) {
		        _classCallCheck(this, LocalForage);

		        for (var driverTypeKey in DefaultDrivers) {
		            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
		                var driver = DefaultDrivers[driverTypeKey];
		                var driverName = driver._driver;
		                this[driverTypeKey] = driverName;

		                if (!DefinedDrivers[driverName]) {
		                    // we don't need to wait for the promise,
		                    // since the default drivers can be defined
		                    // in a blocking manner
		                    this.defineDriver(driver);
		                }
		            }
		        }

		        this._defaultConfig = extend({}, DefaultConfig);
		        this._config = extend({}, this._defaultConfig, options);
		        this._driverSet = null;
		        this._initDriver = null;
		        this._ready = false;
		        this._dbInfo = null;

		        this._wrapLibraryMethodsWithReady();
		        this.setDriver(this._config.driver)["catch"](function () {});
		    }

		    // Set any config values for localForage; can be called anytime before
		    // the first API call (e.g. `getItem`, `setItem`).
		    // We loop through options so we don't overwrite existing config
		    // values.


		    LocalForage.prototype.config = function config(options) {
		        // If the options argument is an object, we use it to set values.
		        // Otherwise, we return either a specified config value or all
		        // config values.
		        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
		            // If localforage is ready and fully initialized, we can't set
		            // any new configuration values. Instead, we return an error.
		            if (this._ready) {
		                return new Error("Can't call config() after localforage " + 'has been used.');
		            }

		            for (var i in options) {
		                if (i === 'storeName') {
		                    options[i] = options[i].replace(/\W/g, '_');
		                }

		                if (i === 'version' && typeof options[i] !== 'number') {
		                    return new Error('Database version must be a number.');
		                }

		                this._config[i] = options[i];
		            }

		            // after all config options are set and
		            // the driver option is used, try setting it
		            if ('driver' in options && options.driver) {
		                return this.setDriver(this._config.driver);
		            }

		            return true;
		        } else if (typeof options === 'string') {
		            return this._config[options];
		        } else {
		            return this._config;
		        }
		    };

		    // Used to define a custom driver, shared across all instances of
		    // localForage.


		    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
		        var promise = new Promise$1(function (resolve, reject) {
		            try {
		                var driverName = driverObject._driver;
		                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

		                // A driver name should be defined and not overlap with the
		                // library-defined, default drivers.
		                if (!driverObject._driver) {
		                    reject(complianceError);
		                    return;
		                }

		                var driverMethods = LibraryMethods.concat('_initStorage');
		                for (var i = 0, len = driverMethods.length; i < len; i++) {
		                    var driverMethodName = driverMethods[i];

		                    // when the property is there,
		                    // it should be a method even when optional
		                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
		                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
		                        reject(complianceError);
		                        return;
		                    }
		                }

		                var configureMissingMethods = function configureMissingMethods() {
		                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
		                        return function () {
		                            var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
		                            var promise = Promise$1.reject(error);
		                            executeCallback(promise, arguments[arguments.length - 1]);
		                            return promise;
		                        };
		                    };

		                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
		                        var optionalDriverMethod = OptionalDriverMethods[_i];
		                        if (!driverObject[optionalDriverMethod]) {
		                            driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
		                        }
		                    }
		                };

		                configureMissingMethods();

		                var setDriverSupport = function setDriverSupport(support) {
		                    if (DefinedDrivers[driverName]) {
		                        console.info('Redefining LocalForage driver: ' + driverName);
		                    }
		                    DefinedDrivers[driverName] = driverObject;
		                    DriverSupport[driverName] = support;
		                    // don't use a then, so that we can define
		                    // drivers that have simple _support methods
		                    // in a blocking manner
		                    resolve();
		                };

		                if ('_support' in driverObject) {
		                    if (driverObject._support && typeof driverObject._support === 'function') {
		                        driverObject._support().then(setDriverSupport, reject);
		                    } else {
		                        setDriverSupport(!!driverObject._support);
		                    }
		                } else {
		                    setDriverSupport(true);
		                }
		            } catch (e) {
		                reject(e);
		            }
		        });

		        executeTwoCallbacks(promise, callback, errorCallback);
		        return promise;
		    };

		    LocalForage.prototype.driver = function driver() {
		        return this._driver || null;
		    };

		    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
		        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

		        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
		        return getDriverPromise;
		    };

		    LocalForage.prototype.getSerializer = function getSerializer(callback) {
		        var serializerPromise = Promise$1.resolve(localforageSerializer);
		        executeTwoCallbacks(serializerPromise, callback);
		        return serializerPromise;
		    };

		    LocalForage.prototype.ready = function ready(callback) {
		        var self = this;

		        var promise = self._driverSet.then(function () {
		            if (self._ready === null) {
		                self._ready = self._initDriver();
		            }

		            return self._ready;
		        });

		        executeTwoCallbacks(promise, callback, callback);
		        return promise;
		    };

		    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
		        var self = this;

		        if (!isArray(drivers)) {
		            drivers = [drivers];
		        }

		        var supportedDrivers = this._getSupportedDrivers(drivers);

		        function setDriverToConfig() {
		            self._config.driver = self.driver();
		        }

		        function extendSelfWithDriver(driver) {
		            self._extend(driver);
		            setDriverToConfig();

		            self._ready = self._initStorage(self._config);
		            return self._ready;
		        }

		        function initDriver(supportedDrivers) {
		            return function () {
		                var currentDriverIndex = 0;

		                function driverPromiseLoop() {
		                    while (currentDriverIndex < supportedDrivers.length) {
		                        var driverName = supportedDrivers[currentDriverIndex];
		                        currentDriverIndex++;

		                        self._dbInfo = null;
		                        self._ready = null;

		                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
		                    }

		                    setDriverToConfig();
		                    var error = new Error('No available storage method found.');
		                    self._driverSet = Promise$1.reject(error);
		                    return self._driverSet;
		                }

		                return driverPromiseLoop();
		            };
		        }

		        // There might be a driver initialization in progress
		        // so wait for it to finish in order to avoid a possible
		        // race condition to set _dbInfo
		        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
		            return Promise$1.resolve();
		        }) : Promise$1.resolve();

		        this._driverSet = oldDriverSetDone.then(function () {
		            var driverName = supportedDrivers[0];
		            self._dbInfo = null;
		            self._ready = null;

		            return self.getDriver(driverName).then(function (driver) {
		                self._driver = driver._driver;
		                setDriverToConfig();
		                self._wrapLibraryMethodsWithReady();
		                self._initDriver = initDriver(supportedDrivers);
		            });
		        })["catch"](function () {
		            setDriverToConfig();
		            var error = new Error('No available storage method found.');
		            self._driverSet = Promise$1.reject(error);
		            return self._driverSet;
		        });

		        executeTwoCallbacks(this._driverSet, callback, errorCallback);
		        return this._driverSet;
		    };

		    LocalForage.prototype.supports = function supports(driverName) {
		        return !!DriverSupport[driverName];
		    };

		    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
		        extend(this, libraryMethodsAndProperties);
		    };

		    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
		        var supportedDrivers = [];
		        for (var i = 0, len = drivers.length; i < len; i++) {
		            var driverName = drivers[i];
		            if (this.supports(driverName)) {
		                supportedDrivers.push(driverName);
		            }
		        }
		        return supportedDrivers;
		    };

		    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
		        // Add a stub for each driver API method that delays the call to the
		        // corresponding driver method until localForage is ready. These stubs
		        // will be replaced by the driver methods as soon as the driver is
		        // loaded, so there is no performance impact.
		        for (var i = 0, len = LibraryMethods.length; i < len; i++) {
		            callWhenReady(this, LibraryMethods[i]);
		        }
		    };

		    LocalForage.prototype.createInstance = function createInstance(options) {
		        return new LocalForage(options);
		    };

		    return LocalForage;
		}();

		// The actual localForage object that we expose as a module or via a
		// global. It's extended by pulling in one of our other libraries.


		var localforage_js = new LocalForage();

		module.exports = localforage_js;

		},{"3":3}]},{},[4])(4)
		});
	} (localforage$1));

	var localforage = localforage$1.exports;

	const database = 'hltb-for-deck';
	const styleKey = 'hltb-style';
	const hideDetailsKey = 'hltb-hide-details';
	const statPreferencesKey = 'hltb-stat-preferences';
	localforage.config({
	    name: database,
	});
	var states = [];
	async function updateCache(key, value) {
	    await localforage.setItem(key, value);
	}
	async function getCache(key) {
	    var cache = await localforage.getItem(key);
	    return cache;
	}
	async function setShowHide(appId) {
	    const stats = await localforage.getItem(appId);
	    if (stats) {
	        stats.showStats = !stats.showStats;
	        await localforage.setItem(appId, stats);
	    }
	    saveState(stats);
	}
	function saveState(state) {
	    var toremove = null;
	    states.forEach(function (current) {
	        if (current.gameId == state.gameId) {
	            toremove = current;
	        }
	    });
	    if (toremove != null) {
	        delete states[states.indexOf(toremove)];
	    }
	    states.push(state);
	}
	function getShowHide(appId) {
	    states.forEach(function (current) {
	        if (current.gameId?.toString() == appId)
	            return current.showStats;
	    });
	    return false;
	}
	async function getStyle() {
	    const hltbStyle = await localforage.getItem(styleKey);
	    return hltbStyle === null ? 'default' : hltbStyle;
	}
	async function getPreference() {
	    const hideViewDetails = await localforage.getItem(hideDetailsKey);
	    return hideViewDetails === null ? false : hideViewDetails;
	}
	async function getStatPreferences() {
	    const preferences = await localforage.getItem(statPreferencesKey);
	    return preferences;
	}
	const clearCache$s = () => {
	    const style = getStyle();
	    localforage.clear();
	    updateCache(styleKey, style);
	};

	// update cache after 12 hours
	const needCacheUpdate = (lastUpdatedAt) => {
	    const now = new Date();
	    const durationMs = Math.abs(lastUpdatedAt.getTime() - now.getTime());
	    const hoursBetweenDates = durationMs / (60 * 60 * 1000);
	    return hoursBetweenDates > 12;
	};
	// Hook to get data from HLTB
	const useHltb = (appId, game, serverApi) => {
	    const [stats, setStats] = React.useState({
	        mainStat: '--',
	        mainPlusStat: '--',
	        completeStat: '--',
	        allStylesStat: '--',
	        gameId: undefined,
	        lastUpdatedAt: new Date(),
	        showStats: true,
	    });
	    const data = {
	        searchType: 'games',
	        searchTerms: game.split(' '),
	        searchPage: 1,
	        size: 50,
	        searchOptions: {
	            games: {
	                userId: 0,
	                platform: '',
	                sortCategory: 'name',
	                rangeCategory: 'main',
	                rangeTime: { min: 0, max: 0 },
	                gameplay: { perspective: '', flow: '', genre: '' },
	                modifier: 'hide_dlc',
	            },
	            users: {},
	            filter: '',
	            sort: 0,
	            randomizer: 0,
	        },
	    };
	    React.useEffect(() => {
	        const getData = async () => {
	            const cache = await getCache(`${appId}`);
	            saveState(cache);
	            if (cache && !needCacheUpdate(cache.lastUpdatedAt)) {
	                setStats(cache);
	            }
	            else {
	                console.log(`get HLTB data for ${appId} and ${game}`);
	                const res = await serverApi.fetchNoCors('https://howlongtobeat.com/api/search', {
	                    method: 'POST',
	                    headers: {
	                        'Content-Type': 'application/json',
	                        Origin: 'https://howlongtobeat.com',
	                        Referer: 'https://howlongtobeat.com/',
	                        Authority: 'howlongtobeat.com',
	                        'User-Agent': 'Chrome: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
	                    },
	                    //@ts-ignore
	                    json: data,
	                });
	                const result = res.result;
	                if (result.status === 200) {
	                    const results = JSON.parse(result.body);
	                    results.data.forEach((game) => {
	                        game.game_name = normalize(game.game_name);
	                    });
	                    // Search by appId first
	                    let gameStats = results.data.find((elem) => elem.profile_steam === appId);
	                    // Search by game name if not found by appId
	                    if (gameStats === undefined)
	                        gameStats = results.data.find((elem) => elem.game_name === game);
	                    // Couldn't find anything, find a close match
	                    if (gameStats === undefined && results.data.length > 0) {
	                        const possibleChoices = results.data
	                            .map((gameStat) => {
	                            return {
	                                minEditDistance: levenshtein.exports.get(game, gameStat.game_name, { useCollator: true }),
	                                gameStat,
	                            };
	                        })
	                            .sort((a, b) => {
	                            if (a.minEditDistance === b.minEditDistance) {
	                                return (b.gameStat.comp_all_count -
	                                    a.gameStat.comp_all_count);
	                            }
	                            else {
	                                return (a.minEditDistance - b.minEditDistance);
	                            }
	                        });
	                        gameStats = possibleChoices[0].gameStat;
	                    }
	                    let newStats = stats;
	                    if (gameStats) {
	                        newStats = {
	                            mainStat: gameStats.comp_main > 0
	                                ? (gameStats.comp_main / 60 / 60).toFixed(1)
	                                : '--',
	                            mainPlusStat: gameStats.comp_plus > 0
	                                ? (gameStats.comp_plus / 60 / 60).toFixed(1)
	                                : '--',
	                            completeStat: gameStats.comp_100 > 0
	                                ? (gameStats.comp_100 / 60 / 60).toFixed(1)
	                                : '--',
	                            allStylesStat: gameStats.comp_all > 0
	                                ? (gameStats.comp_all / 60 / 60).toFixed(1)
	                                : '--',
	                            gameId: gameStats.game_id,
	                            lastUpdatedAt: new Date(),
	                            showStats: cache?.showStats ?? true,
	                        };
	                    }
	                    setStats(newStats);
	                    updateCache(`${appId}`, newStats);
	                }
	                else {
	                    console.error(result);
	                }
	            }
	        };
	        if (appId) {
	            getData();
	        }
	    }, [appId]);
	    return {
	        ...stats,
	    };
	};

	const useStyle = () => {
	    const [style, setStyle] = React.useState(null);
	    React.useEffect(() => {
	        const getData = async () => {
	            setStyle(await getStyle());
	        };
	        getData();
	    }, []);
	    return style;
	};
	const usePreference = () => {
	    const [pref, setPref] = React.useState(false);
	    React.useEffect(() => {
	        const getData = async () => {
	            setPref(await getPreference());
	        };
	        getData();
	    }, []);
	    return pref;
	};

	var style = (jsxRuntime.exports.jsx("style", { children: `

#hltb-for-deck{
    position: relative;
}

.hltb-info {
    background: rgba(14, 20, 27, 0.25);
    position: relative;
    border-bottom: 2px solid rgba(61, 68, 80, 0.54);
    padding-top: 5px;
}

.hltb-info-clean-default {
    background: rgba(14, 20, 27, 0.5);
    position: absolute;
    border: none;
    padding-top: 0px;
    top: -40px;
    height: 40px;
    width: 100%;
}

.hltb-info-absolute {
    position: absolute;
    display: none;
}

.hltb-info-clean {
    background: rgba(14, 20, 27, 0.5);
    position: absolute;
    top: -55vh;
    right: 2.8vw;
    width: fit-content;
    height: fit-content;
    border: none;
}

.hltb-info-clean-left {
    right: 0px;
    left: 2.8vw;
}

.hltb-info ul {
    list-style: none;
    padding: 5px 35px;
    margin: 0px;
    display: flex;
    flex: 0 1 auto;    
}

.hltb-info-clean ul {
    display: block;
    flex-direction: column;
}

.hltb-info ul li {
    text-align: center;
}

// .hltb-info-clean ul li {
//     width: 100%;
// }

.hltb-info p {
    margin: 0;
}

.hltb-gametime {
    font-size: 16px;
    font-weight: bold;
}

.hltb-info-clean .hltb-gametime {
    font-size: 20px;
    font-weight: bold;
}

.hltb-label {
    text-transform: uppercase;
    font-size: 10px;
}
.hltb-details-btn {
    background: transparent !important;
    color: #1a9fff !important;
    margin: auto !important;
    font-size: 10px !important;
    font-weight: bold !important;
    text-transform: uppercase;
    line-height: 10px !important;
}
.hltb-details-btn-clean {
    margin: auto !important;
}

.hltb-details-btn:focus {
    color: white !important;
}
.hltb-details-btn:hover {
    color: white !important;
}
` }));

	const useStatPreferences = () => {
	    const [statPrefs, setStatPrefs] = React.useState({
	        showMain: true,
	        showMainPlus: true,
	        showComplete: true,
	        showAllStyles: true,
	    });
	    React.useEffect(() => {
	        const getData = async () => {
	            let prefs = await getStatPreferences();
	            if (prefs === null)
	                prefs = statPrefs;
	            setStatPrefs(prefs);
	        };
	        getData();
	    }, []);
	    return statPrefs;
	};

	var clean$r = "\"Clean\"";
	var cleanLeft$r = "\"Clean\" Left";
	var cleanDefault$r = "\"Clean\" Default";
	var hltbStyle$r = "HLTB Style";
	var cleanDesc$r = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$r = "Hide \"View Details\"";
	var hideViewDetailsDesc$r = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$r = "Toggle main stat";
	var toggleMainStatDesc$r = "Shows/Hides just the main stat";
	var toggleMainPlusStat$r = "Toggle main+ stat";
	var toggleMainPlusStatDesc$r = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$r = "Toggle completionist stat";
	var toggleCompletionistStatDesc$r = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$r = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$r = "Shows/Hides just the all play styles stat";
	var clearCache$r = "Clear Cache";
	var hours$r = "hours";
	var mainStory$r = "Main Story";
	var mainPlusExtras$r = "Main + Extras";
	var completionist$r = "Completionist";
	var allStyles$r = "All Styles";
	var viewDetails$r = "View Details";
	var showHideStats$r = "Show/Hide HLTB Stats";
	var bg = {
		"default": "Default",
		clean: clean$r,
		cleanLeft: cleanLeft$r,
		cleanDefault: cleanDefault$r,
		hltbStyle: hltbStyle$r,
		cleanDesc: cleanDesc$r,
		hideViewDetails: hideViewDetails$r,
		hideViewDetailsDesc: hideViewDetailsDesc$r,
		toggleMainStat: toggleMainStat$r,
		toggleMainStatDesc: toggleMainStatDesc$r,
		toggleMainPlusStat: toggleMainPlusStat$r,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$r,
		toggleCompletionistStat: toggleCompletionistStat$r,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$r,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$r,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$r,
		clearCache: clearCache$r,
		hours: hours$r,
		mainStory: mainStory$r,
		mainPlusExtras: mainPlusExtras$r,
		completionist: completionist$r,
		allStyles: allStyles$r,
		viewDetails: viewDetails$r,
		showHideStats: showHideStats$r
	};

	var clean$q = "\"Clean\"";
	var cleanLeft$q = "\"Clean\" Left";
	var cleanDefault$q = "\"Clean\" Default";
	var hltbStyle$q = "HLTB Style";
	var cleanDesc$q = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$q = "Hide \"View Details\"";
	var hideViewDetailsDesc$q = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$q = "Toggle main stat";
	var toggleMainStatDesc$q = "Shows/Hides just the main stat";
	var toggleMainPlusStat$q = "Toggle main+ stat";
	var toggleMainPlusStatDesc$q = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$q = "Toggle completionist stat";
	var toggleCompletionistStatDesc$q = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$q = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$q = "Shows/Hides just the all play styles stat";
	var clearCache$q = "Clear Cache";
	var hours$q = "hours";
	var mainStory$q = "Main Story";
	var mainPlusExtras$q = "Main + Extras";
	var completionist$q = "Completionist";
	var allStyles$q = "All Styles";
	var viewDetails$q = "View Details";
	var showHideStats$q = "Show/Hide HLTB Stats";
	var cs = {
		"default": "Default",
		clean: clean$q,
		cleanLeft: cleanLeft$q,
		cleanDefault: cleanDefault$q,
		hltbStyle: hltbStyle$q,
		cleanDesc: cleanDesc$q,
		hideViewDetails: hideViewDetails$q,
		hideViewDetailsDesc: hideViewDetailsDesc$q,
		toggleMainStat: toggleMainStat$q,
		toggleMainStatDesc: toggleMainStatDesc$q,
		toggleMainPlusStat: toggleMainPlusStat$q,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$q,
		toggleCompletionistStat: toggleCompletionistStat$q,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$q,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$q,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$q,
		clearCache: clearCache$q,
		hours: hours$q,
		mainStory: mainStory$q,
		mainPlusExtras: mainPlusExtras$q,
		completionist: completionist$q,
		allStyles: allStyles$q,
		viewDetails: viewDetails$q,
		showHideStats: showHideStats$q
	};

	var clean$p = "\"Clean\"";
	var cleanLeft$p = "\"Clean\" Left";
	var cleanDefault$p = "\"Clean\" Default";
	var hltbStyle$p = "HLTB Style";
	var cleanDesc$p = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$p = "Hide \"View Details\"";
	var hideViewDetailsDesc$p = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$p = "Toggle main stat";
	var toggleMainStatDesc$p = "Shows/Hides just the main stat";
	var toggleMainPlusStat$p = "Toggle main+ stat";
	var toggleMainPlusStatDesc$p = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$p = "Toggle completionist stat";
	var toggleCompletionistStatDesc$p = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$p = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$p = "Shows/Hides just the all play styles stat";
	var clearCache$p = "Clear Cache";
	var hours$p = "hours";
	var mainStory$p = "Main Story";
	var mainPlusExtras$p = "Main + Extras";
	var completionist$p = "Completionist";
	var allStyles$p = "All Styles";
	var viewDetails$p = "View Details";
	var showHideStats$p = "Show/Hide HLTB Stats";
	var da = {
		"default": "Default",
		clean: clean$p,
		cleanLeft: cleanLeft$p,
		cleanDefault: cleanDefault$p,
		hltbStyle: hltbStyle$p,
		cleanDesc: cleanDesc$p,
		hideViewDetails: hideViewDetails$p,
		hideViewDetailsDesc: hideViewDetailsDesc$p,
		toggleMainStat: toggleMainStat$p,
		toggleMainStatDesc: toggleMainStatDesc$p,
		toggleMainPlusStat: toggleMainPlusStat$p,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$p,
		toggleCompletionistStat: toggleCompletionistStat$p,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$p,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$p,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$p,
		clearCache: clearCache$p,
		hours: hours$p,
		mainStory: mainStory$p,
		mainPlusExtras: mainPlusExtras$p,
		completionist: completionist$p,
		allStyles: allStyles$p,
		viewDetails: viewDetails$p,
		showHideStats: showHideStats$p
	};

	var clean$o = "\"Simpel\"";
	var cleanLeft$o = "\"Simpel\" Links";
	var cleanDefault$o = "\"Simpel\" Standard";
	var hltbStyle$o = "HLTB Style";
	var cleanDesc$o = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$o = "Hide \"View Details\"";
	var hideViewDetailsDesc$o = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$o = "Toggle main stat";
	var toggleMainStatDesc$o = "Shows/Hides just the main stat";
	var toggleMainPlusStat$o = "Toggle main+ stat";
	var toggleMainPlusStatDesc$o = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$o = "Toggle completionist stat";
	var toggleCompletionistStatDesc$o = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$o = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$o = "Shows/Hides just the all play styles stat";
	var clearCache$o = "Clear Cache";
	var hours$o = "Stunden";
	var mainStory$o = "Haupt Story";
	var mainPlusExtras$o = "Haupt + Extras";
	var completionist$o = "Vervöllständiger";
	var allStyles$o = "Alle Styles";
	var viewDetails$o = "View Details";
	var showHideStats$o = "Show/Hide HLTB Stats";
	var HideStats$1 = "Verstecke HLTB Stats";
	var ShowStats$1 = "Zeige HLTB Stats";
	var de = {
		"default": "Standard",
		clean: clean$o,
		cleanLeft: cleanLeft$o,
		cleanDefault: cleanDefault$o,
		hltbStyle: hltbStyle$o,
		cleanDesc: cleanDesc$o,
		hideViewDetails: hideViewDetails$o,
		hideViewDetailsDesc: hideViewDetailsDesc$o,
		toggleMainStat: toggleMainStat$o,
		toggleMainStatDesc: toggleMainStatDesc$o,
		toggleMainPlusStat: toggleMainPlusStat$o,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$o,
		toggleCompletionistStat: toggleCompletionistStat$o,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$o,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$o,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$o,
		clearCache: clearCache$o,
		hours: hours$o,
		mainStory: mainStory$o,
		mainPlusExtras: mainPlusExtras$o,
		completionist: completionist$o,
		allStyles: allStyles$o,
		viewDetails: viewDetails$o,
		showHideStats: showHideStats$o,
		HideStats: HideStats$1,
		ShowStats: ShowStats$1
	};

	var clean$n = "\"Clean\"";
	var cleanLeft$n = "\"Clean\" Left";
	var cleanDefault$n = "\"Clean\" Default";
	var hltbStyle$n = "HLTB Style";
	var cleanDesc$n = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$n = "Hide \"View Details\"";
	var hideViewDetailsDesc$n = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$n = "Toggle main stat";
	var toggleMainStatDesc$n = "Shows/Hides just the main stat";
	var toggleMainPlusStat$n = "Toggle main+ stat";
	var toggleMainPlusStatDesc$n = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$n = "Toggle completionist stat";
	var toggleCompletionistStatDesc$n = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$n = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$n = "Shows/Hides just the all play styles stat";
	var clearCache$n = "Clear Cache";
	var hours$n = "hours";
	var mainStory$n = "Main Story";
	var mainPlusExtras$n = "Main + Extras";
	var completionist$n = "Completionist";
	var allStyles$n = "All Styles";
	var viewDetails$n = "View Details";
	var showHideStats$n = "Show/Hide HLTB Stats";
	var el = {
		"default": "Default",
		clean: clean$n,
		cleanLeft: cleanLeft$n,
		cleanDefault: cleanDefault$n,
		hltbStyle: hltbStyle$n,
		cleanDesc: cleanDesc$n,
		hideViewDetails: hideViewDetails$n,
		hideViewDetailsDesc: hideViewDetailsDesc$n,
		toggleMainStat: toggleMainStat$n,
		toggleMainStatDesc: toggleMainStatDesc$n,
		toggleMainPlusStat: toggleMainPlusStat$n,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$n,
		toggleCompletionistStat: toggleCompletionistStat$n,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$n,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$n,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$n,
		clearCache: clearCache$n,
		hours: hours$n,
		mainStory: mainStory$n,
		mainPlusExtras: mainPlusExtras$n,
		completionist: completionist$n,
		allStyles: allStyles$n,
		viewDetails: viewDetails$n,
		showHideStats: showHideStats$n
	};

	var clean$m = "\"Clean\"";
	var cleanLeft$m = "\"Clean\" Left";
	var cleanDefault$m = "\"Clean\" Default";
	var hltbStyle$m = "HLTB Style";
	var cleanDesc$m = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$m = "Hide \"View Details\"";
	var hideViewDetailsDesc$m = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$m = "Toggle main stat";
	var toggleMainStatDesc$m = "Shows/Hides just the main stat";
	var toggleMainPlusStat$m = "Toggle main+ stat";
	var toggleMainPlusStatDesc$m = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$m = "Toggle completionist stat";
	var toggleCompletionistStatDesc$m = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$m = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$m = "Shows/Hides just the all play styles stat";
	var clearCache$m = "Clear Cache";
	var hours$m = "hours";
	var mainStory$m = "Main Story";
	var mainPlusExtras$m = "Main + Extras";
	var completionist$m = "Completionist";
	var allStyles$m = "All Styles";
	var viewDetails$m = "View Details";
	var showHideStats$m = "Show/Hide HLTB Stats";
	var HideStats = "Hide HLTB Stats";
	var ShowStats = "Show HLTB Stats";
	var en = {
		"default": "Default",
		clean: clean$m,
		cleanLeft: cleanLeft$m,
		cleanDefault: cleanDefault$m,
		hltbStyle: hltbStyle$m,
		cleanDesc: cleanDesc$m,
		hideViewDetails: hideViewDetails$m,
		hideViewDetailsDesc: hideViewDetailsDesc$m,
		toggleMainStat: toggleMainStat$m,
		toggleMainStatDesc: toggleMainStatDesc$m,
		toggleMainPlusStat: toggleMainPlusStat$m,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$m,
		toggleCompletionistStat: toggleCompletionistStat$m,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$m,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$m,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$m,
		clearCache: clearCache$m,
		hours: hours$m,
		mainStory: mainStory$m,
		mainPlusExtras: mainPlusExtras$m,
		completionist: completionist$m,
		allStyles: allStyles$m,
		viewDetails: viewDetails$m,
		showHideStats: showHideStats$m,
		HideStats: HideStats,
		ShowStats: ShowStats
	};

	var clean$l = "\"Clean\"";
	var cleanLeft$l = "\"Clean\" Left";
	var cleanDefault$l = "\"Clean\" Default";
	var hltbStyle$l = "HLTB Style";
	var cleanDesc$l = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$l = "Hide \"View Details\"";
	var hideViewDetailsDesc$l = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$l = "Toggle main stat";
	var toggleMainStatDesc$l = "Shows/Hides just the main stat";
	var toggleMainPlusStat$l = "Toggle main+ stat";
	var toggleMainPlusStatDesc$l = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$l = "Toggle completionist stat";
	var toggleCompletionistStatDesc$l = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$l = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$l = "Shows/Hides just the all play styles stat";
	var clearCache$l = "Clear Cache";
	var hours$l = "hours";
	var mainStory$l = "Main Story";
	var mainPlusExtras$l = "Main + Extras";
	var completionist$l = "Completionist";
	var allStyles$l = "All Styles";
	var viewDetails$l = "View Details";
	var showHideStats$l = "Show/Hide HLTB Stats";
	var es = {
		"default": "Default",
		clean: clean$l,
		cleanLeft: cleanLeft$l,
		cleanDefault: cleanDefault$l,
		hltbStyle: hltbStyle$l,
		cleanDesc: cleanDesc$l,
		hideViewDetails: hideViewDetails$l,
		hideViewDetailsDesc: hideViewDetailsDesc$l,
		toggleMainStat: toggleMainStat$l,
		toggleMainStatDesc: toggleMainStatDesc$l,
		toggleMainPlusStat: toggleMainPlusStat$l,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$l,
		toggleCompletionistStat: toggleCompletionistStat$l,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$l,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$l,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$l,
		clearCache: clearCache$l,
		hours: hours$l,
		mainStory: mainStory$l,
		mainPlusExtras: mainPlusExtras$l,
		completionist: completionist$l,
		allStyles: allStyles$l,
		viewDetails: viewDetails$l,
		showHideStats: showHideStats$l
	};

	var clean$k = "\"Clean\"";
	var cleanLeft$k = "\"Clean\" Left";
	var cleanDefault$k = "\"Clean\" Default";
	var hltbStyle$k = "HLTB Style";
	var cleanDesc$k = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$k = "Hide \"View Details\"";
	var hideViewDetailsDesc$k = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$k = "Toggle main stat";
	var toggleMainStatDesc$k = "Shows/Hides just the main stat";
	var toggleMainPlusStat$k = "Toggle main+ stat";
	var toggleMainPlusStatDesc$k = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$k = "Toggle completionist stat";
	var toggleCompletionistStatDesc$k = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$k = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$k = "Shows/Hides just the all play styles stat";
	var clearCache$k = "Clear Cache";
	var hours$k = "hours";
	var mainStory$k = "Main Story";
	var mainPlusExtras$k = "Main + Extras";
	var completionist$k = "Completionist";
	var allStyles$k = "All Styles";
	var viewDetails$k = "View Details";
	var showHideStats$k = "Show/Hide HLTB Stats";
	var es419 = {
		"default": "Default",
		clean: clean$k,
		cleanLeft: cleanLeft$k,
		cleanDefault: cleanDefault$k,
		hltbStyle: hltbStyle$k,
		cleanDesc: cleanDesc$k,
		hideViewDetails: hideViewDetails$k,
		hideViewDetailsDesc: hideViewDetailsDesc$k,
		toggleMainStat: toggleMainStat$k,
		toggleMainStatDesc: toggleMainStatDesc$k,
		toggleMainPlusStat: toggleMainPlusStat$k,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$k,
		toggleCompletionistStat: toggleCompletionistStat$k,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$k,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$k,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$k,
		clearCache: clearCache$k,
		hours: hours$k,
		mainStory: mainStory$k,
		mainPlusExtras: mainPlusExtras$k,
		completionist: completionist$k,
		allStyles: allStyles$k,
		viewDetails: viewDetails$k,
		showHideStats: showHideStats$k
	};

	var clean$j = "\"Clean\"";
	var cleanLeft$j = "\"Clean\" Left";
	var cleanDefault$j = "\"Clean\" Default";
	var hltbStyle$j = "HLTB Style";
	var cleanDesc$j = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$j = "Hide \"View Details\"";
	var hideViewDetailsDesc$j = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$j = "Toggle main stat";
	var toggleMainStatDesc$j = "Shows/Hides just the main stat";
	var toggleMainPlusStat$j = "Toggle main+ stat";
	var toggleMainPlusStatDesc$j = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$j = "Toggle completionist stat";
	var toggleCompletionistStatDesc$j = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$j = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$j = "Shows/Hides just the all play styles stat";
	var clearCache$j = "Clear Cache";
	var hours$j = "hours";
	var mainStory$j = "Main Story";
	var mainPlusExtras$j = "Main + Extras";
	var completionist$j = "Completionist";
	var allStyles$j = "All Styles";
	var viewDetails$j = "View Details";
	var showHideStats$j = "Show/Hide HLTB Stats";
	var fi = {
		"default": "Default",
		clean: clean$j,
		cleanLeft: cleanLeft$j,
		cleanDefault: cleanDefault$j,
		hltbStyle: hltbStyle$j,
		cleanDesc: cleanDesc$j,
		hideViewDetails: hideViewDetails$j,
		hideViewDetailsDesc: hideViewDetailsDesc$j,
		toggleMainStat: toggleMainStat$j,
		toggleMainStatDesc: toggleMainStatDesc$j,
		toggleMainPlusStat: toggleMainPlusStat$j,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$j,
		toggleCompletionistStat: toggleCompletionistStat$j,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$j,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$j,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$j,
		clearCache: clearCache$j,
		hours: hours$j,
		mainStory: mainStory$j,
		mainPlusExtras: mainPlusExtras$j,
		completionist: completionist$j,
		allStyles: allStyles$j,
		viewDetails: viewDetails$j,
		showHideStats: showHideStats$j
	};

	var clean$i = "\"Clean\"";
	var cleanLeft$i = "\"Clean\" Left";
	var cleanDefault$i = "\"Clean\" Default";
	var hltbStyle$i = "HLTB Style";
	var cleanDesc$i = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$i = "Hide \"View Details\"";
	var hideViewDetailsDesc$i = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$i = "Toggle main stat";
	var toggleMainStatDesc$i = "Shows/Hides just the main stat";
	var toggleMainPlusStat$i = "Toggle main+ stat";
	var toggleMainPlusStatDesc$i = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$i = "Toggle completionist stat";
	var toggleCompletionistStatDesc$i = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$i = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$i = "Shows/Hides just the all play styles stat";
	var clearCache$i = "Clear Cache";
	var hours$i = "hours";
	var mainStory$i = "Main Story";
	var mainPlusExtras$i = "Main + Extras";
	var completionist$i = "Completionist";
	var allStyles$i = "All Styles";
	var viewDetails$i = "View Details";
	var showHideStats$i = "Show/Hide HLTB Stats";
	var fr = {
		"default": "Default",
		clean: clean$i,
		cleanLeft: cleanLeft$i,
		cleanDefault: cleanDefault$i,
		hltbStyle: hltbStyle$i,
		cleanDesc: cleanDesc$i,
		hideViewDetails: hideViewDetails$i,
		hideViewDetailsDesc: hideViewDetailsDesc$i,
		toggleMainStat: toggleMainStat$i,
		toggleMainStatDesc: toggleMainStatDesc$i,
		toggleMainPlusStat: toggleMainPlusStat$i,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$i,
		toggleCompletionistStat: toggleCompletionistStat$i,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$i,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$i,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$i,
		clearCache: clearCache$i,
		hours: hours$i,
		mainStory: mainStory$i,
		mainPlusExtras: mainPlusExtras$i,
		completionist: completionist$i,
		allStyles: allStyles$i,
		viewDetails: viewDetails$i,
		showHideStats: showHideStats$i
	};

	var clean$h = "\"Clean\"";
	var cleanLeft$h = "\"Clean\" Left";
	var cleanDefault$h = "\"Clean\" Default";
	var hltbStyle$h = "HLTB Style";
	var cleanDesc$h = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$h = "Hide \"View Details\"";
	var hideViewDetailsDesc$h = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$h = "Toggle main stat";
	var toggleMainStatDesc$h = "Shows/Hides just the main stat";
	var toggleMainPlusStat$h = "Toggle main+ stat";
	var toggleMainPlusStatDesc$h = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$h = "Toggle completionist stat";
	var toggleCompletionistStatDesc$h = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$h = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$h = "Shows/Hides just the all play styles stat";
	var clearCache$h = "Clear Cache";
	var hours$h = "hours";
	var mainStory$h = "Main Story";
	var mainPlusExtras$h = "Main + Extras";
	var completionist$h = "Completionist";
	var allStyles$h = "All Styles";
	var viewDetails$h = "View Details";
	var showHideStats$h = "Show/Hide HLTB Stats";
	var hu = {
		"default": "Default",
		clean: clean$h,
		cleanLeft: cleanLeft$h,
		cleanDefault: cleanDefault$h,
		hltbStyle: hltbStyle$h,
		cleanDesc: cleanDesc$h,
		hideViewDetails: hideViewDetails$h,
		hideViewDetailsDesc: hideViewDetailsDesc$h,
		toggleMainStat: toggleMainStat$h,
		toggleMainStatDesc: toggleMainStatDesc$h,
		toggleMainPlusStat: toggleMainPlusStat$h,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$h,
		toggleCompletionistStat: toggleCompletionistStat$h,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$h,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$h,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$h,
		clearCache: clearCache$h,
		hours: hours$h,
		mainStory: mainStory$h,
		mainPlusExtras: mainPlusExtras$h,
		completionist: completionist$h,
		allStyles: allStyles$h,
		viewDetails: viewDetails$h,
		showHideStats: showHideStats$h
	};

	var clean$g = "\"Clean\"";
	var cleanLeft$g = "\"Clean\" Left";
	var cleanDefault$g = "\"Clean\" Default";
	var hltbStyle$g = "HLTB Style";
	var cleanDesc$g = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$g = "Hide \"View Details\"";
	var hideViewDetailsDesc$g = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$g = "Toggle main stat";
	var toggleMainStatDesc$g = "Shows/Hides just the main stat";
	var toggleMainPlusStat$g = "Toggle main+ stat";
	var toggleMainPlusStatDesc$g = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$g = "Toggle completionist stat";
	var toggleCompletionistStatDesc$g = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$g = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$g = "Shows/Hides just the all play styles stat";
	var clearCache$g = "Clear Cache";
	var hours$g = "hours";
	var mainStory$g = "Main Story";
	var mainPlusExtras$g = "Main + Extras";
	var completionist$g = "Completionist";
	var allStyles$g = "All Styles";
	var viewDetails$g = "View Details";
	var showHideStats$g = "Show/Hide HLTB Stats";
	var it = {
		"default": "Default",
		clean: clean$g,
		cleanLeft: cleanLeft$g,
		cleanDefault: cleanDefault$g,
		hltbStyle: hltbStyle$g,
		cleanDesc: cleanDesc$g,
		hideViewDetails: hideViewDetails$g,
		hideViewDetailsDesc: hideViewDetailsDesc$g,
		toggleMainStat: toggleMainStat$g,
		toggleMainStatDesc: toggleMainStatDesc$g,
		toggleMainPlusStat: toggleMainPlusStat$g,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$g,
		toggleCompletionistStat: toggleCompletionistStat$g,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$g,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$g,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$g,
		clearCache: clearCache$g,
		hours: hours$g,
		mainStory: mainStory$g,
		mainPlusExtras: mainPlusExtras$g,
		completionist: completionist$g,
		allStyles: allStyles$g,
		viewDetails: viewDetails$g,
		showHideStats: showHideStats$g
	};

	var clean$f = "\"Clean\"";
	var cleanLeft$f = "\"Clean\" Left";
	var cleanDefault$f = "\"Clean\" Default";
	var hltbStyle$f = "HLTB Style";
	var cleanDesc$f = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$f = "Hide \"View Details\"";
	var hideViewDetailsDesc$f = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$f = "Toggle main stat";
	var toggleMainStatDesc$f = "Shows/Hides just the main stat";
	var toggleMainPlusStat$f = "Toggle main+ stat";
	var toggleMainPlusStatDesc$f = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$f = "Toggle completionist stat";
	var toggleCompletionistStatDesc$f = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$f = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$f = "Shows/Hides just the all play styles stat";
	var clearCache$f = "Clear Cache";
	var hours$f = "hours";
	var mainStory$f = "Main Story";
	var mainPlusExtras$f = "Main + Extras";
	var completionist$f = "Completionist";
	var allStyles$f = "All Styles";
	var viewDetails$f = "View Details";
	var showHideStats$f = "Show/Hide HLTB Stats";
	var ja = {
		"default": "Default",
		clean: clean$f,
		cleanLeft: cleanLeft$f,
		cleanDefault: cleanDefault$f,
		hltbStyle: hltbStyle$f,
		cleanDesc: cleanDesc$f,
		hideViewDetails: hideViewDetails$f,
		hideViewDetailsDesc: hideViewDetailsDesc$f,
		toggleMainStat: toggleMainStat$f,
		toggleMainStatDesc: toggleMainStatDesc$f,
		toggleMainPlusStat: toggleMainPlusStat$f,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$f,
		toggleCompletionistStat: toggleCompletionistStat$f,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$f,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$f,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$f,
		clearCache: clearCache$f,
		hours: hours$f,
		mainStory: mainStory$f,
		mainPlusExtras: mainPlusExtras$f,
		completionist: completionist$f,
		allStyles: allStyles$f,
		viewDetails: viewDetails$f,
		showHideStats: showHideStats$f
	};

	var clean$e = "\"Clean\"";
	var cleanLeft$e = "\"Clean\" Left";
	var cleanDefault$e = "\"Clean\" Default";
	var hltbStyle$e = "HLTB Style";
	var cleanDesc$e = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$e = "Hide \"View Details\"";
	var hideViewDetailsDesc$e = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$e = "Toggle main stat";
	var toggleMainStatDesc$e = "Shows/Hides just the main stat";
	var toggleMainPlusStat$e = "Toggle main+ stat";
	var toggleMainPlusStatDesc$e = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$e = "Toggle completionist stat";
	var toggleCompletionistStatDesc$e = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$e = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$e = "Shows/Hides just the all play styles stat";
	var clearCache$e = "Clear Cache";
	var hours$e = "hours";
	var mainStory$e = "Main Story";
	var mainPlusExtras$e = "Main + Extras";
	var completionist$e = "Completionist";
	var allStyles$e = "All Styles";
	var viewDetails$e = "View Details";
	var showHideStats$e = "Show/Hide HLTB Stats";
	var ko = {
		"default": "Default",
		clean: clean$e,
		cleanLeft: cleanLeft$e,
		cleanDefault: cleanDefault$e,
		hltbStyle: hltbStyle$e,
		cleanDesc: cleanDesc$e,
		hideViewDetails: hideViewDetails$e,
		hideViewDetailsDesc: hideViewDetailsDesc$e,
		toggleMainStat: toggleMainStat$e,
		toggleMainStatDesc: toggleMainStatDesc$e,
		toggleMainPlusStat: toggleMainPlusStat$e,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$e,
		toggleCompletionistStat: toggleCompletionistStat$e,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$e,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$e,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$e,
		clearCache: clearCache$e,
		hours: hours$e,
		mainStory: mainStory$e,
		mainPlusExtras: mainPlusExtras$e,
		completionist: completionist$e,
		allStyles: allStyles$e,
		viewDetails: viewDetails$e,
		showHideStats: showHideStats$e
	};

	var clean$d = "\"Clean\"";
	var cleanLeft$d = "\"Clean\" Left";
	var cleanDefault$d = "\"Clean\" Default";
	var hltbStyle$d = "HLTB Style";
	var cleanDesc$d = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$d = "Hide \"View Details\"";
	var hideViewDetailsDesc$d = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$d = "Toggle main stat";
	var toggleMainStatDesc$d = "Shows/Hides just the main stat";
	var toggleMainPlusStat$d = "Toggle main+ stat";
	var toggleMainPlusStatDesc$d = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$d = "Toggle completionist stat";
	var toggleCompletionistStatDesc$d = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$d = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$d = "Shows/Hides just the all play styles stat";
	var clearCache$d = "Clear Cache";
	var hours$d = "hours";
	var mainStory$d = "Main Story";
	var mainPlusExtras$d = "Main + Extras";
	var completionist$d = "Completionist";
	var allStyles$d = "All Styles";
	var viewDetails$d = "View Details";
	var showHideStats$d = "Show/Hide HLTB Stats";
	var nl = {
		"default": "Default",
		clean: clean$d,
		cleanLeft: cleanLeft$d,
		cleanDefault: cleanDefault$d,
		hltbStyle: hltbStyle$d,
		cleanDesc: cleanDesc$d,
		hideViewDetails: hideViewDetails$d,
		hideViewDetailsDesc: hideViewDetailsDesc$d,
		toggleMainStat: toggleMainStat$d,
		toggleMainStatDesc: toggleMainStatDesc$d,
		toggleMainPlusStat: toggleMainPlusStat$d,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$d,
		toggleCompletionistStat: toggleCompletionistStat$d,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$d,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$d,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$d,
		clearCache: clearCache$d,
		hours: hours$d,
		mainStory: mainStory$d,
		mainPlusExtras: mainPlusExtras$d,
		completionist: completionist$d,
		allStyles: allStyles$d,
		viewDetails: viewDetails$d,
		showHideStats: showHideStats$d
	};

	var clean$c = "\"Clean\"";
	var cleanLeft$c = "\"Clean\" Left";
	var cleanDefault$c = "\"Clean\" Default";
	var hltbStyle$c = "HLTB Style";
	var cleanDesc$c = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$c = "Hide \"View Details\"";
	var hideViewDetailsDesc$c = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$c = "Toggle main stat";
	var toggleMainStatDesc$c = "Shows/Hides just the main stat";
	var toggleMainPlusStat$c = "Toggle main+ stat";
	var toggleMainPlusStatDesc$c = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$c = "Toggle completionist stat";
	var toggleCompletionistStatDesc$c = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$c = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$c = "Shows/Hides just the all play styles stat";
	var clearCache$c = "Clear Cache";
	var hours$c = "hours";
	var mainStory$c = "Main Story";
	var mainPlusExtras$c = "Main + Extras";
	var completionist$c = "Completionist";
	var allStyles$c = "All Styles";
	var viewDetails$c = "View Details";
	var showHideStats$c = "Show/Hide HLTB Stats";
	var no = {
		"default": "Default",
		clean: clean$c,
		cleanLeft: cleanLeft$c,
		cleanDefault: cleanDefault$c,
		hltbStyle: hltbStyle$c,
		cleanDesc: cleanDesc$c,
		hideViewDetails: hideViewDetails$c,
		hideViewDetailsDesc: hideViewDetailsDesc$c,
		toggleMainStat: toggleMainStat$c,
		toggleMainStatDesc: toggleMainStatDesc$c,
		toggleMainPlusStat: toggleMainPlusStat$c,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$c,
		toggleCompletionistStat: toggleCompletionistStat$c,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$c,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$c,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$c,
		clearCache: clearCache$c,
		hours: hours$c,
		mainStory: mainStory$c,
		mainPlusExtras: mainPlusExtras$c,
		completionist: completionist$c,
		allStyles: allStyles$c,
		viewDetails: viewDetails$c,
		showHideStats: showHideStats$c
	};

	var clean$b = "\"Clean\"";
	var cleanLeft$b = "\"Clean\" Left";
	var cleanDefault$b = "\"Clean\" Default";
	var hltbStyle$b = "HLTB Style";
	var cleanDesc$b = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$b = "Hide \"View Details\"";
	var hideViewDetailsDesc$b = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$b = "Toggle main stat";
	var toggleMainStatDesc$b = "Shows/Hides just the main stat";
	var toggleMainPlusStat$b = "Toggle main+ stat";
	var toggleMainPlusStatDesc$b = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$b = "Toggle completionist stat";
	var toggleCompletionistStatDesc$b = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$b = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$b = "Shows/Hides just the all play styles stat";
	var clearCache$b = "Clear Cache";
	var hours$b = "hours";
	var mainStory$b = "Main Story";
	var mainPlusExtras$b = "Main + Extras";
	var completionist$b = "Completionist";
	var allStyles$b = "All Styles";
	var viewDetails$b = "View Details";
	var showHideStats$b = "Show/Hide HLTB Stats";
	var pl = {
		"default": "Default",
		clean: clean$b,
		cleanLeft: cleanLeft$b,
		cleanDefault: cleanDefault$b,
		hltbStyle: hltbStyle$b,
		cleanDesc: cleanDesc$b,
		hideViewDetails: hideViewDetails$b,
		hideViewDetailsDesc: hideViewDetailsDesc$b,
		toggleMainStat: toggleMainStat$b,
		toggleMainStatDesc: toggleMainStatDesc$b,
		toggleMainPlusStat: toggleMainPlusStat$b,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$b,
		toggleCompletionistStat: toggleCompletionistStat$b,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$b,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$b,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$b,
		clearCache: clearCache$b,
		hours: hours$b,
		mainStory: mainStory$b,
		mainPlusExtras: mainPlusExtras$b,
		completionist: completionist$b,
		allStyles: allStyles$b,
		viewDetails: viewDetails$b,
		showHideStats: showHideStats$b
	};

	var clean$a = "\"Clean\"";
	var cleanLeft$a = "\"Clean\" Left";
	var cleanDefault$a = "\"Clean\" Default";
	var hltbStyle$a = "HLTB Style";
	var cleanDesc$a = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$a = "Hide \"View Details\"";
	var hideViewDetailsDesc$a = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$a = "Toggle main stat";
	var toggleMainStatDesc$a = "Shows/Hides just the main stat";
	var toggleMainPlusStat$a = "Toggle main+ stat";
	var toggleMainPlusStatDesc$a = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$a = "Toggle completionist stat";
	var toggleCompletionistStatDesc$a = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$a = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$a = "Shows/Hides just the all play styles stat";
	var clearCache$a = "Clear Cache";
	var hours$a = "hours";
	var mainStory$a = "Main Story";
	var mainPlusExtras$a = "Main + Extras";
	var completionist$a = "Completionist";
	var allStyles$a = "All Styles";
	var viewDetails$a = "View Details";
	var showHideStats$a = "Show/Hide HLTB Stats";
	var pt = {
		"default": "Default",
		clean: clean$a,
		cleanLeft: cleanLeft$a,
		cleanDefault: cleanDefault$a,
		hltbStyle: hltbStyle$a,
		cleanDesc: cleanDesc$a,
		hideViewDetails: hideViewDetails$a,
		hideViewDetailsDesc: hideViewDetailsDesc$a,
		toggleMainStat: toggleMainStat$a,
		toggleMainStatDesc: toggleMainStatDesc$a,
		toggleMainPlusStat: toggleMainPlusStat$a,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$a,
		toggleCompletionistStat: toggleCompletionistStat$a,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$a,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$a,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$a,
		clearCache: clearCache$a,
		hours: hours$a,
		mainStory: mainStory$a,
		mainPlusExtras: mainPlusExtras$a,
		completionist: completionist$a,
		allStyles: allStyles$a,
		viewDetails: viewDetails$a,
		showHideStats: showHideStats$a
	};

	var clean$9 = "\"Clean\"";
	var cleanLeft$9 = "\"Clean\" de Esquerda";
	var cleanDefault$9 = "\"Clean\" Padrão";
	var hltbStyle$9 = "Estilo HLTB";
	var cleanDesc$9 = "Os estilos \"Clean\" são foram feitos para funcionar com o tema \"Clean Gameview\" do CSS Loader";
	var hideViewDetails$9 = "Ocultar \"Ver Detalhes\"";
	var hideViewDetailsDesc$9 = "Oculta o botão \"Ver Detalhes\" sobre os atributos do HLTB";
	var toggleMainStat$9 = "Ajusta o atributo história principal";
	var toggleMainStatDesc$9 = "Exibe/Oculta apenas o atributo história principal";
	var toggleMainPlusStat$9 = "Ajusta o atributo história principal+";
	var toggleMainPlusStatDesc$9 = "Exibe/Oculta apenas o atributo história principal+";
	var toggleCompletionistStat$9 = "Ajusta o atributo completista";
	var toggleCompletionistStatDesc$9 = "Exibe/Oculta apenas o atributo completista";
	var toggleAllPlayStylesStat$9 = "Ajusta o atributo \"todas modalidades de jogo\"";
	var toggleAllPlayStylesStatDesc$9 = "Exibe/Oculta apenas o atributo todas modalidades";
	var clearCache$9 = "Limpar Cache";
	var hours$9 = "horas";
	var mainStory$9 = "História Principal";
	var mainPlusExtras$9 = "Principal + Extras";
	var completionist$9 = "Completista";
	var allStyles$9 = "Todas Modalidades";
	var viewDetails$9 = "Ver Detalhes";
	var showHideStats$9 = "Exibir/Ocultar Atributos HLTB";
	var ptBr = {
		"default": "Padrão",
		clean: clean$9,
		cleanLeft: cleanLeft$9,
		cleanDefault: cleanDefault$9,
		hltbStyle: hltbStyle$9,
		cleanDesc: cleanDesc$9,
		hideViewDetails: hideViewDetails$9,
		hideViewDetailsDesc: hideViewDetailsDesc$9,
		toggleMainStat: toggleMainStat$9,
		toggleMainStatDesc: toggleMainStatDesc$9,
		toggleMainPlusStat: toggleMainPlusStat$9,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$9,
		toggleCompletionistStat: toggleCompletionistStat$9,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$9,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$9,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$9,
		clearCache: clearCache$9,
		hours: hours$9,
		mainStory: mainStory$9,
		mainPlusExtras: mainPlusExtras$9,
		completionist: completionist$9,
		allStyles: allStyles$9,
		viewDetails: viewDetails$9,
		showHideStats: showHideStats$9
	};

	var clean$8 = "\"Clean\"";
	var cleanLeft$8 = "\"Clean\" Left";
	var cleanDefault$8 = "\"Clean\" Default";
	var hltbStyle$8 = "HLTB Style";
	var cleanDesc$8 = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$8 = "Hide \"View Details\"";
	var hideViewDetailsDesc$8 = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$8 = "Toggle main stat";
	var toggleMainStatDesc$8 = "Shows/Hides just the main stat";
	var toggleMainPlusStat$8 = "Toggle main+ stat";
	var toggleMainPlusStatDesc$8 = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$8 = "Toggle completionist stat";
	var toggleCompletionistStatDesc$8 = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$8 = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$8 = "Shows/Hides just the all play styles stat";
	var clearCache$8 = "Clear Cache";
	var hours$8 = "hours";
	var mainStory$8 = "Main Story";
	var mainPlusExtras$8 = "Main + Extras";
	var completionist$8 = "Completionist";
	var allStyles$8 = "All Styles";
	var viewDetails$8 = "View Details";
	var showHideStats$8 = "Show/Hide HLTB Stats";
	var ro = {
		"default": "Default",
		clean: clean$8,
		cleanLeft: cleanLeft$8,
		cleanDefault: cleanDefault$8,
		hltbStyle: hltbStyle$8,
		cleanDesc: cleanDesc$8,
		hideViewDetails: hideViewDetails$8,
		hideViewDetailsDesc: hideViewDetailsDesc$8,
		toggleMainStat: toggleMainStat$8,
		toggleMainStatDesc: toggleMainStatDesc$8,
		toggleMainPlusStat: toggleMainPlusStat$8,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$8,
		toggleCompletionistStat: toggleCompletionistStat$8,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$8,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$8,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$8,
		clearCache: clearCache$8,
		hours: hours$8,
		mainStory: mainStory$8,
		mainPlusExtras: mainPlusExtras$8,
		completionist: completionist$8,
		allStyles: allStyles$8,
		viewDetails: viewDetails$8,
		showHideStats: showHideStats$8
	};

	var clean$7 = "\"Clean\"";
	var cleanLeft$7 = "\"Clean\" Left";
	var cleanDefault$7 = "\"Clean\" Default";
	var hltbStyle$7 = "HLTB Style";
	var cleanDesc$7 = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$7 = "Hide \"View Details\"";
	var hideViewDetailsDesc$7 = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$7 = "Toggle main stat";
	var toggleMainStatDesc$7 = "Shows/Hides just the main stat";
	var toggleMainPlusStat$7 = "Toggle main+ stat";
	var toggleMainPlusStatDesc$7 = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$7 = "Toggle completionist stat";
	var toggleCompletionistStatDesc$7 = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$7 = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$7 = "Shows/Hides just the all play styles stat";
	var clearCache$7 = "Clear Cache";
	var hours$7 = "hours";
	var mainStory$7 = "Main Story";
	var mainPlusExtras$7 = "Main + Extras";
	var completionist$7 = "Completionist";
	var allStyles$7 = "All Styles";
	var viewDetails$7 = "View Details";
	var showHideStats$7 = "Show/Hide HLTB Stats";
	var ru = {
		"default": "Default",
		clean: clean$7,
		cleanLeft: cleanLeft$7,
		cleanDefault: cleanDefault$7,
		hltbStyle: hltbStyle$7,
		cleanDesc: cleanDesc$7,
		hideViewDetails: hideViewDetails$7,
		hideViewDetailsDesc: hideViewDetailsDesc$7,
		toggleMainStat: toggleMainStat$7,
		toggleMainStatDesc: toggleMainStatDesc$7,
		toggleMainPlusStat: toggleMainPlusStat$7,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$7,
		toggleCompletionistStat: toggleCompletionistStat$7,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$7,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$7,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$7,
		clearCache: clearCache$7,
		hours: hours$7,
		mainStory: mainStory$7,
		mainPlusExtras: mainPlusExtras$7,
		completionist: completionist$7,
		allStyles: allStyles$7,
		viewDetails: viewDetails$7,
		showHideStats: showHideStats$7
	};

	var clean$6 = "\"Clean\"";
	var cleanLeft$6 = "\"Clean\" Left";
	var cleanDefault$6 = "\"Clean\" Default";
	var hltbStyle$6 = "HLTB Style";
	var cleanDesc$6 = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$6 = "Hide \"View Details\"";
	var hideViewDetailsDesc$6 = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$6 = "Toggle main stat";
	var toggleMainStatDesc$6 = "Shows/Hides just the main stat";
	var toggleMainPlusStat$6 = "Toggle main+ stat";
	var toggleMainPlusStatDesc$6 = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$6 = "Toggle completionist stat";
	var toggleCompletionistStatDesc$6 = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$6 = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$6 = "Shows/Hides just the all play styles stat";
	var clearCache$6 = "Clear Cache";
	var hours$6 = "hours";
	var mainStory$6 = "Main Story";
	var mainPlusExtras$6 = "Main + Extras";
	var completionist$6 = "Completionist";
	var allStyles$6 = "All Styles";
	var viewDetails$6 = "View Details";
	var showHideStats$6 = "Show/Hide HLTB Stats";
	var sv = {
		"default": "Default",
		clean: clean$6,
		cleanLeft: cleanLeft$6,
		cleanDefault: cleanDefault$6,
		hltbStyle: hltbStyle$6,
		cleanDesc: cleanDesc$6,
		hideViewDetails: hideViewDetails$6,
		hideViewDetailsDesc: hideViewDetailsDesc$6,
		toggleMainStat: toggleMainStat$6,
		toggleMainStatDesc: toggleMainStatDesc$6,
		toggleMainPlusStat: toggleMainPlusStat$6,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$6,
		toggleCompletionistStat: toggleCompletionistStat$6,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$6,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$6,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$6,
		clearCache: clearCache$6,
		hours: hours$6,
		mainStory: mainStory$6,
		mainPlusExtras: mainPlusExtras$6,
		completionist: completionist$6,
		allStyles: allStyles$6,
		viewDetails: viewDetails$6,
		showHideStats: showHideStats$6
	};

	var clean$5 = "\"Clean\"";
	var cleanLeft$5 = "\"Clean\" Left";
	var cleanDefault$5 = "\"Clean\" Default";
	var hltbStyle$5 = "HLTB Style";
	var cleanDesc$5 = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$5 = "Hide \"View Details\"";
	var hideViewDetailsDesc$5 = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$5 = "Toggle main stat";
	var toggleMainStatDesc$5 = "Shows/Hides just the main stat";
	var toggleMainPlusStat$5 = "Toggle main+ stat";
	var toggleMainPlusStatDesc$5 = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$5 = "Toggle completionist stat";
	var toggleCompletionistStatDesc$5 = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$5 = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$5 = "Shows/Hides just the all play styles stat";
	var clearCache$5 = "Clear Cache";
	var hours$5 = "hours";
	var mainStory$5 = "Main Story";
	var mainPlusExtras$5 = "Main + Extras";
	var completionist$5 = "Completionist";
	var allStyles$5 = "All Styles";
	var viewDetails$5 = "View Details";
	var showHideStats$5 = "Show/Hide HLTB Stats";
	var th = {
		"default": "Default",
		clean: clean$5,
		cleanLeft: cleanLeft$5,
		cleanDefault: cleanDefault$5,
		hltbStyle: hltbStyle$5,
		cleanDesc: cleanDesc$5,
		hideViewDetails: hideViewDetails$5,
		hideViewDetailsDesc: hideViewDetailsDesc$5,
		toggleMainStat: toggleMainStat$5,
		toggleMainStatDesc: toggleMainStatDesc$5,
		toggleMainPlusStat: toggleMainPlusStat$5,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$5,
		toggleCompletionistStat: toggleCompletionistStat$5,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$5,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$5,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$5,
		clearCache: clearCache$5,
		hours: hours$5,
		mainStory: mainStory$5,
		mainPlusExtras: mainPlusExtras$5,
		completionist: completionist$5,
		allStyles: allStyles$5,
		viewDetails: viewDetails$5,
		showHideStats: showHideStats$5
	};

	var clean$4 = "\"Clean\"";
	var cleanLeft$4 = "\"Clean\" Left";
	var cleanDefault$4 = "\"Clean\" Default";
	var hltbStyle$4 = "HLTB Style";
	var cleanDesc$4 = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$4 = "Hide \"View Details\"";
	var hideViewDetailsDesc$4 = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$4 = "Toggle main stat";
	var toggleMainStatDesc$4 = "Shows/Hides just the main stat";
	var toggleMainPlusStat$4 = "Toggle main+ stat";
	var toggleMainPlusStatDesc$4 = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$4 = "Toggle completionist stat";
	var toggleCompletionistStatDesc$4 = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$4 = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$4 = "Shows/Hides just the all play styles stat";
	var clearCache$4 = "Clear Cache";
	var hours$4 = "hours";
	var mainStory$4 = "Main Story";
	var mainPlusExtras$4 = "Main + Extras";
	var completionist$4 = "Completionist";
	var allStyles$4 = "All Styles";
	var viewDetails$4 = "View Details";
	var showHideStats$4 = "Show/Hide HLTB Stats";
	var tr = {
		"default": "Default",
		clean: clean$4,
		cleanLeft: cleanLeft$4,
		cleanDefault: cleanDefault$4,
		hltbStyle: hltbStyle$4,
		cleanDesc: cleanDesc$4,
		hideViewDetails: hideViewDetails$4,
		hideViewDetailsDesc: hideViewDetailsDesc$4,
		toggleMainStat: toggleMainStat$4,
		toggleMainStatDesc: toggleMainStatDesc$4,
		toggleMainPlusStat: toggleMainPlusStat$4,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$4,
		toggleCompletionistStat: toggleCompletionistStat$4,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$4,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$4,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$4,
		clearCache: clearCache$4,
		hours: hours$4,
		mainStory: mainStory$4,
		mainPlusExtras: mainPlusExtras$4,
		completionist: completionist$4,
		allStyles: allStyles$4,
		viewDetails: viewDetails$4,
		showHideStats: showHideStats$4
	};

	var clean$3 = "\"Clean\"";
	var cleanLeft$3 = "\"Clean\" Left";
	var cleanDefault$3 = "\"Clean\" Default";
	var hltbStyle$3 = "HLTB Style";
	var cleanDesc$3 = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$3 = "Hide \"View Details\"";
	var hideViewDetailsDesc$3 = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$3 = "Toggle main stat";
	var toggleMainStatDesc$3 = "Shows/Hides just the main stat";
	var toggleMainPlusStat$3 = "Toggle main+ stat";
	var toggleMainPlusStatDesc$3 = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$3 = "Toggle completionist stat";
	var toggleCompletionistStatDesc$3 = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$3 = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$3 = "Shows/Hides just the all play styles stat";
	var clearCache$3 = "Clear Cache";
	var hours$3 = "hours";
	var mainStory$3 = "Main Story";
	var mainPlusExtras$3 = "Main + Extras";
	var completionist$3 = "Completionist";
	var allStyles$3 = "All Styles";
	var viewDetails$3 = "View Details";
	var showHideStats$3 = "Show/Hide HLTB Stats";
	var uk = {
		"default": "Default",
		clean: clean$3,
		cleanLeft: cleanLeft$3,
		cleanDefault: cleanDefault$3,
		hltbStyle: hltbStyle$3,
		cleanDesc: cleanDesc$3,
		hideViewDetails: hideViewDetails$3,
		hideViewDetailsDesc: hideViewDetailsDesc$3,
		toggleMainStat: toggleMainStat$3,
		toggleMainStatDesc: toggleMainStatDesc$3,
		toggleMainPlusStat: toggleMainPlusStat$3,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$3,
		toggleCompletionistStat: toggleCompletionistStat$3,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$3,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$3,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$3,
		clearCache: clearCache$3,
		hours: hours$3,
		mainStory: mainStory$3,
		mainPlusExtras: mainPlusExtras$3,
		completionist: completionist$3,
		allStyles: allStyles$3,
		viewDetails: viewDetails$3,
		showHideStats: showHideStats$3
	};

	var clean$2 = "\"Clean\"";
	var cleanLeft$2 = "\"Clean\" Left";
	var cleanDefault$2 = "\"Clean\" Default";
	var hltbStyle$2 = "HLTB Style";
	var cleanDesc$2 = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$2 = "Hide \"View Details\"";
	var hideViewDetailsDesc$2 = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$2 = "Toggle main stat";
	var toggleMainStatDesc$2 = "Shows/Hides just the main stat";
	var toggleMainPlusStat$2 = "Toggle main+ stat";
	var toggleMainPlusStatDesc$2 = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$2 = "Toggle completionist stat";
	var toggleCompletionistStatDesc$2 = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$2 = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$2 = "Shows/Hides just the all play styles stat";
	var clearCache$2 = "Clear Cache";
	var hours$2 = "hours";
	var mainStory$2 = "Main Story";
	var mainPlusExtras$2 = "Main + Extras";
	var completionist$2 = "Completionist";
	var allStyles$2 = "All Styles";
	var viewDetails$2 = "View Details";
	var showHideStats$2 = "Show/Hide HLTB Stats";
	var vi = {
		"default": "Default",
		clean: clean$2,
		cleanLeft: cleanLeft$2,
		cleanDefault: cleanDefault$2,
		hltbStyle: hltbStyle$2,
		cleanDesc: cleanDesc$2,
		hideViewDetails: hideViewDetails$2,
		hideViewDetailsDesc: hideViewDetailsDesc$2,
		toggleMainStat: toggleMainStat$2,
		toggleMainStatDesc: toggleMainStatDesc$2,
		toggleMainPlusStat: toggleMainPlusStat$2,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$2,
		toggleCompletionistStat: toggleCompletionistStat$2,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$2,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$2,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$2,
		clearCache: clearCache$2,
		hours: hours$2,
		mainStory: mainStory$2,
		mainPlusExtras: mainPlusExtras$2,
		completionist: completionist$2,
		allStyles: allStyles$2,
		viewDetails: viewDetails$2,
		showHideStats: showHideStats$2
	};

	var clean$1 = "\"Clean\"";
	var cleanLeft$1 = "\"Clean\" Left";
	var cleanDefault$1 = "\"Clean\" Default";
	var hltbStyle$1 = "HLTB Style";
	var cleanDesc$1 = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails$1 = "Hide \"View Details\"";
	var hideViewDetailsDesc$1 = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat$1 = "Toggle main stat";
	var toggleMainStatDesc$1 = "Shows/Hides just the main stat";
	var toggleMainPlusStat$1 = "Toggle main+ stat";
	var toggleMainPlusStatDesc$1 = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat$1 = "Toggle completionist stat";
	var toggleCompletionistStatDesc$1 = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat$1 = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc$1 = "Shows/Hides just the all play styles stat";
	var clearCache$1 = "Clear Cache";
	var hours$1 = "hours";
	var mainStory$1 = "Main Story";
	var mainPlusExtras$1 = "Main + Extras";
	var completionist$1 = "Completionist";
	var allStyles$1 = "All Styles";
	var viewDetails$1 = "View Details";
	var showHideStats$1 = "Show/Hide HLTB Stats";
	var zhCn = {
		"default": "Default",
		clean: clean$1,
		cleanLeft: cleanLeft$1,
		cleanDefault: cleanDefault$1,
		hltbStyle: hltbStyle$1,
		cleanDesc: cleanDesc$1,
		hideViewDetails: hideViewDetails$1,
		hideViewDetailsDesc: hideViewDetailsDesc$1,
		toggleMainStat: toggleMainStat$1,
		toggleMainStatDesc: toggleMainStatDesc$1,
		toggleMainPlusStat: toggleMainPlusStat$1,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc$1,
		toggleCompletionistStat: toggleCompletionistStat$1,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc$1,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat$1,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc$1,
		clearCache: clearCache$1,
		hours: hours$1,
		mainStory: mainStory$1,
		mainPlusExtras: mainPlusExtras$1,
		completionist: completionist$1,
		allStyles: allStyles$1,
		viewDetails: viewDetails$1,
		showHideStats: showHideStats$1
	};

	var clean = "\"Clean\"";
	var cleanLeft = "\"Clean\" Left";
	var cleanDefault = "\"Clean\" Default";
	var hltbStyle = "HLTB Style";
	var cleanDesc = "The \"Clean\" styles are intended to work with the CSS Loader Theme \"Clean Gameview\"";
	var hideViewDetails = "Hide \"View Details\"";
	var hideViewDetailsDesc = "Hides \"View Details\" button on HLTB Stats";
	var toggleMainStat = "Toggle main stat";
	var toggleMainStatDesc = "Shows/Hides just the main stat";
	var toggleMainPlusStat = "Toggle main+ stat";
	var toggleMainPlusStatDesc = "Shows/Hides just the main+ stat";
	var toggleCompletionistStat = "Toggle completionist stat";
	var toggleCompletionistStatDesc = "Shows/Hides just the completionist stat";
	var toggleAllPlayStylesStat = "Toggle \"all play styles\" stat";
	var toggleAllPlayStylesStatDesc = "Shows/Hides just the all play styles stat";
	var clearCache = "Clear Cache";
	var hours = "hours";
	var mainStory = "Main Story";
	var mainPlusExtras = "Main + Extras";
	var completionist = "Completionist";
	var allStyles = "All Styles";
	var viewDetails = "View Details";
	var showHideStats = "Show/Hide HLTB Stats";
	var zhTw = {
		"default": "Default",
		clean: clean,
		cleanLeft: cleanLeft,
		cleanDefault: cleanDefault,
		hltbStyle: hltbStyle,
		cleanDesc: cleanDesc,
		hideViewDetails: hideViewDetails,
		hideViewDetailsDesc: hideViewDetailsDesc,
		toggleMainStat: toggleMainStat,
		toggleMainStatDesc: toggleMainStatDesc,
		toggleMainPlusStat: toggleMainPlusStat,
		toggleMainPlusStatDesc: toggleMainPlusStatDesc,
		toggleCompletionistStat: toggleCompletionistStat,
		toggleCompletionistStatDesc: toggleCompletionistStatDesc,
		toggleAllPlayStylesStat: toggleAllPlayStylesStat,
		toggleAllPlayStylesStatDesc: toggleAllPlayStylesStatDesc,
		clearCache: clearCache,
		hours: hours,
		mainStory: mainStory,
		mainPlusExtras: mainPlusExtras,
		completionist: completionist,
		allStyles: allStyles,
		viewDetails: viewDetails,
		showHideStats: showHideStats
	};

	const languages = {
	    bg,
	    cs,
	    da,
	    de,
	    el,
	    en,
	    es,
	    es419,
	    fi,
	    fr,
	    hu,
	    it,
	    ja,
	    ko,
	    nl,
	    no,
	    pl,
	    pt,
	    ptBr,
	    ro,
	    ru,
	    sv,
	    th,
	    tr,
	    uk,
	    vi,
	    zhCn,
	    zhTw,
	};

	function getCurrentLanguage() {
	    const steamLang = window.LocalizationManager.m_rgLocalesToUse[0];
	    const lang = steamLang.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
	    return languages[lang] ? lang : 'en';
	}
	function useLocalization() {
	    const [lang] = React.useState(getCurrentLanguage());
	    return function (key) {
	        if (languages[lang]?.[key]?.length) {
	            return languages[lang]?.[key];
	        }
	        else if (languages.en?.[key]?.length) {
	            return languages.en?.[key];
	        }
	        else {
	            return key;
	        }
	    };
	}

	const GameStats = ({ serverApi, game, appId, id }) => {
	    const [gameLaunching, setGameLaunching] = React.useState(false);
	    const lang = useLocalization();
	    const handleGameActionStart = (_actionType, strAppId, actionName) => {
	        const gameActionAppId = parseInt(strAppId);
	        if (actionName == 'LaunchApp' &&
	            appId == gameActionAppId &&
	            !gameLaunching) {
	            setGameLaunching(true);
	        }
	        else {
	            setGameLaunching(false);
	        }
	    };
	    const onGameActionStart = SteamClient.Apps.RegisterForGameActionStart(handleGameActionStart);
	    const onGameActionEnd = SteamClient.Apps.RegisterForGameActionEnd(handleGameActionStart);
	    React.useEffect(() => {
	        return function cleanup() {
	            onGameActionStart.unregister();
	            onGameActionEnd.unregister();
	        };
	    }, []);
	    const { mainStat, mainPlusStat, completeStat, allStylesStat, gameId, showStats, } = useHltb(appId, game, serverApi);
	    const { showMain, showMainPlus, showComplete, showAllStyles } = useStatPreferences();
	    const hltbStyle = useStyle();
	    const hideDetails = usePreference();
	    const baseClass = hltbStyle === null ? 'hltb-info-absolute' : 'hltb-info';
	    // Hide if there are no stats, show stats is false, all stats are hidden, or the game is launching
	    const hide = (mainStat === mainPlusStat &&
	        mainPlusStat === completeStat &&
	        completeStat === allStylesStat &&
	        allStylesStat === '--') ||
	        !showStats ||
	        gameLaunching;
	    let hltbInfoStyle = '';
	    switch (hltbStyle) {
	        case 'clean':
	        case 'clean-left':
	            hltbInfoStyle = 'hltb-info-clean';
	            break;
	        case 'clean-default':
	            hltbInfoStyle = 'hltb-info-clean-default';
	            break;
	    }
	    const hltbInfoPosition = hltbStyle === 'clean-left' ? 'hltb-info-clean-left' : '';
	    const btnStyle = hltbStyle === 'default' || hltbStyle === 'clean-default'
	        ? ''
	        : 'hltb-details-btn-clean';
	    return (jsxRuntime.exports.jsxs("div", { id: id, style: { display: hide ? 'none' : 'block' }, children: [style, jsxRuntime.exports.jsx("div", { className: `${baseClass} ${hltbInfoStyle} ${hltbInfoPosition}`, children: jsxRuntime.exports.jsxs("ul", { style: {
	                        display: 'flex',
	                        justifyContent: 'space-evenly',
	                    }, children: [jsxRuntime.exports.jsxs("li", { style: { display: showMain ? 'block' : 'none' }, children: [jsxRuntime.exports.jsxs("p", { className: "hltb-gametime", children: [mainStat, " ", lang('hours')] }), jsxRuntime.exports.jsx("p", { className: "hltb-label", children: lang('mainStory') })] }), jsxRuntime.exports.jsxs("li", { style: {
	                                display: showMainPlus ? 'block' : 'none',
	                            }, children: [jsxRuntime.exports.jsxs("p", { className: "hltb-gametime", children: [mainPlusStat, " ", lang('hours')] }), jsxRuntime.exports.jsx("p", { className: "hltb-label", children: lang('mainPlusExtras') })] }), jsxRuntime.exports.jsxs("li", { style: {
	                                display: showComplete ? 'block' : 'none',
	                            }, children: [jsxRuntime.exports.jsxs("p", { className: "hltb-gametime", children: [completeStat, " ", lang('hours')] }), jsxRuntime.exports.jsx("p", { className: "hltb-label", children: lang('completionist') })] }), jsxRuntime.exports.jsxs("li", { style: {
	                                display: showAllStyles ? 'block' : 'none',
	                            }, children: [jsxRuntime.exports.jsxs("p", { className: "hltb-gametime", children: [allStylesStat, " ", lang('hours')] }), jsxRuntime.exports.jsx("p", { className: "hltb-label", children: lang('allStyles') })] }), gameId && !hideDetails && (jsxRuntime.exports.jsx("li", { children: jsxRuntime.exports.jsx(DialogButtonPrimary, { className: `hltb-details-btn ${btnStyle}`, onClick: () => Navigation.NavigateToExternalWeb(`https://howlongtobeat.com/game/${gameId}`), children: lang('viewDetails') }) }))] }) })] }));
	};

	// I hate this method
	const patchAppPage = (serverApi) => {
	    return serverApi.routerHook.addPatch('/library/app/:appid', (props) => {
	        afterPatch(props.children.props, 'renderFunc', (_, ret1) => {
	            const game = normalize(ret1.props.children.props.overview.display_name);
	            const appId = ret1.props.children.props.overview.appid;
	            wrapReactType(ret1.props.children);
	            afterPatch(ret1.props.children.type, 'type', (_1, ret2) => {
	                const componentToSplice = ret2.props.children?.[1]?.props.children.props
	                    .children;
	                // This always seems to be -1
	                const hltbComponentIndex = componentToSplice?.findIndex((child) => {
	                    return (child?.props?.id === 'hltb-for-deck');
	                });
	                // We want to splice into the component before this point
	                const spliceIndex = componentToSplice?.findIndex((child) => {
	                    return (child?.props?.childFocusDisabled !==
	                        undefined &&
	                        child?.props?.navRef !== undefined &&
	                        child?.props?.children?.props
	                            ?.details !== undefined &&
	                        child?.props?.children?.props
	                            ?.overview !== undefined &&
	                        child?.props?.children?.props
	                            ?.bFastRender !== undefined);
	                });
	                const component = (jsxRuntime.exports.jsx(GameStats, { id: "hltb-for-deck", serverApi: serverApi, game: game, appId: appId }));
	                if (hltbComponentIndex < 0) {
	                    if (spliceIndex > -1) {
	                        componentToSplice?.splice(spliceIndex, 0, component);
	                    }
	                    else {
	                        console.error('hltb-for-deck could not find where to splice!');
	                    }
	                }
	                else {
	                    componentToSplice?.splice(hltbComponentIndex, 1, component);
	                }
	                return ret2;
	            });
	            return ret1;
	        });
	        return props;
	    });
	};

	const QuickAccessView = () => {
	    const handleClearCache = () => {
	        clearCache$s();
	        Router.CloseSideMenus();
	    };
	    const style = useStyle();
	    // probably overkill for something so simple but it's fine :)
	    const hideDetails = usePreference();
	    const preferences = useStatPreferences();
	    const lang = useLocalization();
	    const styleOptions = [
	        { data: 0, label: lang('default'), value: 'default' },
	        { data: 1, label: lang('clean'), value: 'clean' },
	        { data: 2, label: lang('cleanLeft'), value: 'clean-left' },
	        { data: 3, label: lang('cleanDefault'), value: 'clean-default' },
	    ];
	    const toggleShowMain = () => {
	        preferences.showMain = !preferences.showMain;
	        updateCache(statPreferencesKey, preferences);
	    };
	    const toggleShowMainPlus = () => {
	        preferences.showMainPlus = !preferences.showMainPlus;
	        updateCache(statPreferencesKey, preferences);
	    };
	    const toggleShowComplete = () => {
	        preferences.showComplete = !preferences.showComplete;
	        updateCache(statPreferencesKey, preferences);
	    };
	    const toggleShowAllStyles = () => {
	        preferences.showAllStyles = !preferences.showAllStyles;
	        updateCache(statPreferencesKey, preferences);
	    };
	    return (jsxRuntime.exports.jsxs(PanelSection, { children: [jsxRuntime.exports.jsx(PanelSectionRow, { children: jsxRuntime.exports.jsx(DropdownItem, { label: lang('hltbStyle'), description: lang('cleanDesc'), menuLabel: lang('hltbStyle'), rgOptions: styleOptions.map((o) => ({
	                        data: o.data,
	                        label: o.label,
	                    })), selectedOption: styleOptions.find((o) => o.value === style)?.data || 0, onChange: (newVal) => {
	                        const newStyle = styleOptions.find((o) => o.data === newVal.data)
	                            ?.value || 'default';
	                        updateCache(styleKey, newStyle);
	                    } }) }), jsxRuntime.exports.jsx(PanelSectionRow, { children: jsxRuntime.exports.jsx(ToggleField, { label: lang('hideViewDetails'), description: lang('hideViewDetailsDesc'), checked: hideDetails, onChange: (checked) => updateCache(hideDetailsKey, checked) }) }), jsxRuntime.exports.jsx(PanelSectionRow, { children: jsxRuntime.exports.jsx(ToggleField, { label: lang('toggleMainStat'), description: lang('toggleMainStatDesc'), checked: preferences.showMain, onChange: () => toggleShowMain() }) }), jsxRuntime.exports.jsx(PanelSectionRow, { children: jsxRuntime.exports.jsx(ToggleField, { label: lang('toggleMainPlusStat'), description: lang('toggleMainPlusStatDesc'), checked: preferences.showMainPlus, onChange: () => toggleShowMainPlus() }) }), jsxRuntime.exports.jsx(PanelSectionRow, { children: jsxRuntime.exports.jsx(ToggleField, { label: lang('toggleCompletionistStat'), description: lang('toggleCompletionistStatDesc'), checked: preferences.showComplete, onChange: () => toggleShowComplete() }) }), jsxRuntime.exports.jsx(PanelSectionRow, { children: jsxRuntime.exports.jsx(ToggleField, { label: lang('toggleAllPlayStylesStat'), description: lang('toggleAllPlayStylesStatDesc'), checked: preferences.showAllStyles, onChange: () => toggleShowAllStyles() }) }), jsxRuntime.exports.jsx(PanelSectionRow, { children: jsxRuntime.exports.jsx(ButtonItem, { layout: "below", onClick: handleClearCache, children: lang('clearCache') }) })] }));
	};

	const HLTBContextMenuItem = ({ appId, shown }) => {
	    const lang = useLocalization();
	    return (jsxRuntime.exports.jsx(MenuItem, { onSelected: () => {
	            // little hacky but it works
	            setShowHide(appId);
	            Navigation.Navigate('/hltb-for-deck/loading');
	            setTimeout(() => Navigation.NavigateBack(), 1000);
	        }, children: lang((shown ? 'ShowStats' : 'HideStats')) }, "hltb-for-deck-stats-settings"));
	};

	const addStatsSettingsMenuItem = async (children, appId, shown) => {
	    children.find((x) => x?.key === 'properties');
	    // Find the index of the menu item for the game's properties
	    const propertiesMenuItem = children.findIndex((item) => findInReactTree(item, (x) => x?.onSelected &&
	        x.onSelected.toString().includes('AppProperties')));
	    // Add the HLTB Stats Setting Menu Item before the Properties Menu Item
	    children.splice(propertiesMenuItem, 0, jsxRuntime.exports.jsx(HLTBContextMenuItem, { appId: `${appId}`, shown: shown }));
	};
	const contextMenuPatch = (LibraryContextMenu) => {
	    // Variable for all patches applied to LibraryContextMenu
	    const patches = {
	        unpatch: () => null,
	    };
	    patches.patchOne = afterPatch(LibraryContextMenu.prototype, 'render', (_, component) => {
	        // Get the current app's ID
	        const appid = component._owner.pendingProps.overview.appid;
	        const shown = getShowHide(appid.toString());
	        if (!patches.patchTwo) {
	            patches.patchTwo = afterPatch(component.type.prototype, 'shouldComponentUpdate', ([nextProps], shouldUpdate) => {
	                const hltbIndex = nextProps.children.findIndex((x) => x?.key === 'hltb-for-deck-stats-settings');
	                hltbIndex != -1 &&
	                    nextProps.children.splice(hltbIndex, 1);
	                if (shouldUpdate === true) {
	                    let updatedAppid = appid;
	                    // find the first menu component where there is a different app id than the current one
	                    const parentOverview = nextProps.children.find((x) => x?._owner?.pendingProps?.overview?.appid &&
	                        x._owner.pendingProps.overview.appid !==
	                            appid);
	                    // if found then use that appid
	                    if (parentOverview) {
	                        updatedAppid =
	                            parentOverview._owner.pendingProps.overview
	                                .appid;
	                    }
	                    addStatsSettingsMenuItem(nextProps.children, updatedAppid, shown);
	                }
	                return shouldUpdate;
	            });
	        }
	        else {
	            // Add the Menu Item if we've already patched
	            addStatsSettingsMenuItem(component.props.children, appid, shown);
	        }
	        return component;
	    });
	    patches.unpatch = () => {
	        patches.patchOne?.unpatch();
	        patches.patchTwo?.unpatch();
	    };
	    return patches;
	};
	const LibraryContextMenu = fakeRenderComponent(findModuleChild((m) => {
	    if (typeof m !== 'object')
	        return;
	    for (const prop in m) {
	        if (m[prop]?.toString() &&
	            m[prop].toString().includes('().LibraryContextMenu')) {
	            return Object.values(m).find((sibling) => sibling?.toString().includes('createElement') &&
	                sibling?.toString().includes('navigator:'));
	        }
	    }
	    return;
	})).type;

	const LoadingScreen = () => {
	    return jsxRuntime.exports.jsx(SteamSpinner, {});
	};

	var index = definePlugin((serverAPI) => {
	    const libraryContextMenuPatch = contextMenuPatch(LibraryContextMenu); //patchAppPage(serverAPI);
	    const libraryAppPagePatch = patchAppPage(serverAPI);
	    serverAPI.routerHook.addRoute('/hltb-for-deck/loading', LoadingScreen);
	    return {
	        title: jsxRuntime.exports.jsx("div", { className: staticClasses.Title, children: "HLTB for Deck" }),
	        icon: jsxRuntime.exports.jsx(FaGamepad, {}),
	        content: jsxRuntime.exports.jsx(QuickAccessView, {}),
	        onDismount() {
	            libraryContextMenuPatch?.unpatch();
	            serverAPI.routerHook.removePatch('/library/app/:appid', libraryAppPagePatch);
	            serverAPI.routerHook.removeRoute('/hltb-for-deck/loading');
	        },
	    };
	});

	return index;

})(SP_REACT);
