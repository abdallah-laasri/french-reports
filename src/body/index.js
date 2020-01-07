import React from "react";
import Theme from "../theme";
import {
  BodyContainer,
  Circle,
  Span,
  H1,
  Line,
  Row,
  RadioWrapper,
  RowDiv,
  Input,
  Textarea,
  Submit,
  Calendar
} from "./style";
import RadioBtn from '../shared/radioBtn'

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: 'rep1',
      checkedPerson:'person1',
      date:''
    };
  }

  setChecked=(value)=>()=>this.setState({checked:value})
  setCheckedPerson=(value)=>()=>this.setState({checkedPerson:value})

  setDate=(e)=>{
    this.setState({date:e.target.value });
  }

  componentDidUpdate(){
    console.log(this.state.date)
  }

  render() {
    return (
      <Theme>
        <BodyContainer>
          <form>
            <Row>
              <Circle><Span>1</Span></Circle>
              <RowDiv>
                <H1>Please choose a type of report</H1>
                <RadioWrapper>
                  <RadioBtn name='report' value='rep1' label='State of play' ischecked={this.state.checked}
                  changed={this.setChecked('rep1')}/>
                  <RadioBtn name='report' value='rep2' label='Site report' ischecked={this.state.checked}
                  changed={this.setChecked('rep2')}/>
                  <RadioBtn name='report' value='rep3' label='Internat report' ischecked={this.state.checked}
                  changed={this.setChecked('rep3')}/>
                  <RadioBtn name='report' value='rep4' label='Others' ischecked={this.state.checked}
                  changed={this.setChecked('rep4')}/>
                </RadioWrapper>
                <Line />
              </RowDiv>
            </Row>
            <Row>
              <Circle><Span>2</Span></Circle>
              <RowDiv>
                <H1>Please choose a date</H1>
                <Input type="date" 
                onChange={this.setDate} value={this.state.date}></Input>
                <Calendar className="far fa-calendar-alt"></Calendar>
                <Line />
              </RowDiv>
            </Row>
            <Row>
              <Circle><Span>3</Span></Circle>
              <RowDiv>
                <H1>Add a comment</H1>
                <Textarea defaultValue="Your observation ..."></Textarea>
              </RowDiv>
            </Row>
            <Row>
              <Circle><Span>4</Span></Circle>
              <RowDiv>
                <H1>Please choose the person who will be on site</H1>
                <RadioWrapper>
                  <RadioBtn name='report' value='person1' label='you even' ischecked={this.state.checkedPerson}
                  changed={this.setCheckedPerson('person1')}/>
                  <RadioBtn name='report' value='person2' label='someone else' ischecked={this.state.checkedPerson}
                  changed={this.setCheckedPerson('person2')}/>
                  <RadioBtn name='report' value='person3' label='no one will be there' ischecked={this.state.checkedPerson}
                  changed={this.setCheckedPerson('person3')}/>
                </RadioWrapper>
              </RowDiv>
            </Row>
            <Submit type="submit" value="Validate"></Submit>
          </form>
        </BodyContainer>
      </Theme>
    );
  }
}

export default Body;
