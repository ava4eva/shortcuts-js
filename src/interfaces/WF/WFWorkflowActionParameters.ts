import WFAskActionDateGranularity from './WFAskActionDateGranularity';
import WFCondition from './WFCondition';
import WFCountType from './WFCountType';
import WFDateActionMode from './WFDateActionMode';
import WFDateFormatStyle from './WFDateFormatStyle';
import WFFlashlightSetting from './WFFlashlightSetting';
import WFGetDictionaryValueType from './WFGetDictionaryValueType';
import WFHTTPBodyType from './WFHTTPBodyType';
import WFHTTPMethod from './WFHTTPMethod';
import WFInputType from './WFInputType';
import WFIPAddressSourceOption from './WFIPAddressSourceOption';
import WFIPAddressTypeOption from './WFIPAddressTypeOption';
import WFMathOperation from './WFMathOperation';
import WFRelativeDateFormatStyle from './WFRelativeDateFormatStyle';
import WFSerialization from './WFSerialization';
import WFTimeFormatStyle from './WFTimeFormatStyle';

interface WFWorkflowActionParameters {
  Advanced?: boolean;
  CustomOutputName?: string;
  GroupingIdentifier?: string;
  OnValue?: boolean;
  ShowHeaders?: boolean;
  Text?: WFSerialization | string;
  UUID?: string;
  WFAskActionDateGranularity?: WFAskActionDateGranularity;
  WFAskActionDefaultAnswer?: WFSerialization | string;
  WFAskActionPrompt?: WFSerialization | string;
  WFBrightness?: number;
  WFCommentActionText?: string;
  WFCondition?: WFCondition;
  WFConditionalActionString?: string;
  WFControlFlowMode?: number;
  WFCountType?: WFCountType;
  WFDateActionDate?: WFSerialization | string;
  WFDateActionMode?: WFSerialization | WFDateActionMode;
  WFDateFormat?: WFSerialization | string;
  WFDateFormatStyle?: WFSerialization | WFDateFormatStyle;
  WFDelayTime?: number;
  WFDictionaryKey?: string;
  WFDontIncludeFileExtension?: boolean;
  WFFlashlightSetting?: WFFlashlightSetting;
  WFFormValues?: WFSerialization;
  WFGetDictionaryValueType?: WFGetDictionaryValueType;
  WFHTTPBodyType?: WFHTTPBodyType;
  WFHTTPHeaders?: WFSerialization;
  WFHTTPMethod?: WFHTTPMethod;
  WFInputType?: WFInputType;
  WFIPAddressSourceOption?: WFIPAddressSourceOption;
  WFIPAddressTypeOption?: WFIPAddressTypeOption;
  WFISO8601IncludeTime?: WFSerialization | boolean;
  WFJSONValues?: WFSerialization;
  WFMathOperand?: number;
  WFMathOperation?: WFMathOperation;
  WFMenuItems?: string[];
  WFMenuItemTitle?: string;
  WFMenuPrompt?: string;
  WFName?: string;
  WFNumberActionNumber?: number;
  WFNumberValue?: number;
  WFRelativeDateFormatStyle?: WFSerialization | WFRelativeDateFormatStyle;
  WFShowWorkflow?: boolean;
  WFSSHHost?: WFSerialization | string;
  WFSSHPassword?: WFSerialization | string;
  WFSSHPort?: WFSerialization | string;
  WFSSHScript?: WFSerialization | string;
  WFSSHUser?: WFSerialization | string;
  WFTextActionText?: WFSerialization | string;
  WFTimeFormatStyle?: WFSerialization | WFTimeFormatStyle;
  WFURLActionURL?: string;
  WFVariable?: WFSerialization | string;
  WFVariableName?: string;
  WFWorkflowName?: string;
}

export default WFWorkflowActionParameters;
