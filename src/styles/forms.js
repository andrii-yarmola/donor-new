var t = require('tcomb-form-native');
import { Dimensions } from 'react-native';

const stylesheet = t.form.Form.stylesheet;

// overriding global styles for ALL forms t-comb

stylesheet.textbox.normal.borderWidth = 0;
stylesheet.textbox.error.borderWidth = 0;
stylesheet.textbox.normal.marginBottom = 0;
stylesheet.textbox.error.marginBottom = 0;
stylesheet.textbox.normal.flex = 1;
stylesheet.textbox.error.flex = 1;
stylesheet.textbox.normal.lineHeight = 35;
stylesheet.textbox.error.lineHeight = 35;
stylesheet.textbox.normal.textAlign = 'right';
stylesheet.textbox.error.textAlign = 'right';

stylesheet.pickerContainer.normal.borderWidth = 0;
stylesheet.pickerContainer.error.borderWidth = 0;
stylesheet.pickerContainer.normal.marginBottom = 0;
stylesheet.pickerContainer.error.marginBottom = 0;
stylesheet.pickerContainer.normal.borderRadius = 0;
stylesheet.pickerContainer.error.borderRadius = 0;
stylesheet.pickerContainer.normal.flex = 1;
stylesheet.pickerContainer.error.flex = 1;
stylesheet.pickerContainer.normal.paddingHorizontal = 5;
stylesheet.pickerContainer.error.paddingHorizontal = 5;

stylesheet.pickerValue.normal.textAlign = 'right';
stylesheet.pickerValue.error.textAlign = 'right';
stylesheet.pickerValue.normal.flex = 1;
stylesheet.pickerValue.error.flex = 1;
stylesheet.pickerValue.normal.paddingHorizontal = 5;
stylesheet.pickerValue.error.paddingHorizontal = 5;

stylesheet.textboxView.normal.borderWidth = 0;
stylesheet.textboxView.error.borderWidth = 0;
stylesheet.textboxView.normal.flex = 1;
stylesheet.textboxView.error.flex = 1;
stylesheet.textboxView.normal.borderRadius = 0;
stylesheet.textboxView.error.borderRadius = 0;
stylesheet.textboxView.normal.height = 45;
stylesheet.textboxView.error.height = 45;
stylesheet.textboxView.normal.padding = 5;
stylesheet.textboxView.error.padding = 5;

stylesheet.formGroup.normal.flexDirection = 'row';
stylesheet.formGroup.error.flexDirection = 'row';
stylesheet.formGroup.normal.justifyContent = 'space-between';
stylesheet.formGroup.error.justifyContent = 'space-between';
stylesheet.formGroup.normal.borderWidth = 0;
stylesheet.formGroup.error.borderWidth = 0;
stylesheet.formGroup.normal.borderBottomWidth = 0.5;
stylesheet.formGroup.error.borderBottomWidth = 0.5;
stylesheet.formGroup.normal.borderColor = '#bcbdbe';
stylesheet.formGroup.error.borderColor = 'red';
stylesheet.formGroup.normal.marginBottom = 0;
stylesheet.formGroup.error.marginBottom = 0;
stylesheet.formGroup.normal.marginLeft = 15;
stylesheet.formGroup.error.marginLeft = 15;


//stylesheet.controlLabel.normal.width = 125;
//stylesheet.controlLabel.error.width = 125;
stylesheet.controlLabel.normal.marginBottom = 0;
stylesheet.controlLabel.error.marginBottom = 0;
stylesheet.controlLabel.normal.lineHeight = 35;
stylesheet.controlLabel.error.lineHeight = 35;
stylesheet.controlLabel.normal.padding = 5;
stylesheet.controlLabel.error.padding = 5;
stylesheet.controlLabel.normal.paddingHorizontal = 0;
stylesheet.controlLabel.error.paddingHorizontal = 0;
stylesheet.controlLabel.normal.fontWeight = '100';
stylesheet.controlLabel.error.fontWeight = '100';

stylesheet.checkbox.normal.marginTop = 7;
stylesheet.checkbox.error.marginTop = 7;
stylesheet.checkbox.normal.marginBottom = 7;
stylesheet.checkbox.error.marginBottom = 7;
stylesheet.checkbox.normal.marginHorizontal = 10;
stylesheet.checkbox.error.marginHorizontal = 10;

stylesheet.dateTouchable.normal.paddingTop = 32; 
stylesheet.dateTouchable.error.paddingTop = 32; 
stylesheet.dateTouchable.normal.marginLeft = -25; 
stylesheet.dateTouchable.error.marginLeft = -25; 
stylesheet.dateTouchable.normal.backgroundColor = 'transparent'; 
stylesheet.dateTouchable.error.backgroundColor = 'transparent'; 


stylesheet.dateValue.normal.textAlign = 'right';
stylesheet.dateValue.error.textAlign = 'right';

// should be reworked:
stylesheet.dateValue.normal.width = Dimensions.get('window').width - 30;
stylesheet.dateValue.normal.marginTop = -29;
stylesheet.dateValue.normal.marginBottom = 8;
stylesheet.dateValue.error.width = Dimensions.get('window').width - 30;
stylesheet.dateValue.error.marginTop = -29;
stylesheet.dateValue.error.marginBottom = 8;


// stylesheet.formGroup.error.marginBottom = 30;
// stylesheet.errorBlock.flexBasis = '100%';
// stylesheet.errorBlock.position = 'absolute';
// stylesheet.errorBlock.bottom = -25;
// stylesheet.errorBlock.left = 0;



export default t;
