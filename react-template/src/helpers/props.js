import CustomSelect from "../components/CustomSelect";
import RadioButtons from "../components/RadioButtons";

export const setProps = (item, props) => {

	let attributes = props;
	if(item.component === CustomSelect) attributes = { ...attributes, options: item.options };
	if(item.component === RadioButtons) attributes = { ...attributes, items: item.itemsName };
	attributes = {
		...attributes,
		type: item.type,
		subtype: item.subtype,
		placeholder: item.placeholder,
		mask: item.mask,
		postfix: item.postfix,
		lengthText: item.lengthText,
		emptyMessage: item.emptyMessage,
		validateMessage: item.validateMessage,
		isRequired: item.isRequired,
		parentValidate: item.parentValidate,
		isValidate: item.isValidate,
	};
	return attributes;
};
