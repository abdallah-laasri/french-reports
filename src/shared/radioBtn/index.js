import React from 'react'
import { Check, Radio, Label,RadioDiv } from '../../body/style'

const RadioBtn = (props) => {
 return(
   <RadioDiv onClick={props.changed}>
  <Check ischecked={props.value===props.ischecked}/>
  <Radio onChange={props.changed}
   checked={props.value===props.ischecked} 
   type="radio" 
   name={props.name} 
   value={props.value} 
   id={props.value}>
  </Radio>
  <Label htmlFor={props.value}>{props.label}</Label>
  </RadioDiv>
            )
} 
export default RadioBtn;
