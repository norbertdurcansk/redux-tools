import { curry, path } from 'ramda';

/**
 * Returns Redux state by namespace. Returns undefined if namespace is undefined.
 *
 * @param {?string} feature optional feature name
 * @param {?string} namespace optional namespace
 * @param {Object} state Redux state
 * @returns {?Object} namespaced Redux state
 */
const getStateByNamespace = curry((feature, namespace, state) => {
	if (!namespace || !feature) {
		return undefined;
	}

	return path([feature, namespace], state);
});

export default getStateByNamespace;
