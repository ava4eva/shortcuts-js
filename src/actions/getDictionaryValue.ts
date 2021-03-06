import WFGetDictionaryValueType from '../interfaces/WF/WFGetDictionaryValueType';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Dictionary Value Action. Gets the value for the specified key in the dictionary passed into the action.
 *
 * ```js
 * getDictionaryValue({
 *   get: 'Value',
 *   key: 'My Key',
 * });
 * ```
 */
const getDictionaryValue = (
  options: {
    /** The key of the dictionary to get */
    key?: string,
    /** The thing to get */
    get?: WFGetDictionaryValueType,
  },
): WFWorkflowAction => {
  const {
    key = '',
    get = 'Value',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.getvalueforkey',
    WFWorkflowActionParameters: {
      WFDictionaryKey: key,
      WFGetDictionaryValueType: get,
    },
  };
};

export default getDictionaryValue;
