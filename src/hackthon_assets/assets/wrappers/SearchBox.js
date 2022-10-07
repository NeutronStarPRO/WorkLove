import styled from 'styled-components'

const Wrapper = styled.div`
.search
  {
    position: absolute;	text-align: right;
	width: 100%;left: 50%;top: 53%;
	transform: translate(-50%, -50%);
}
  .softbox{
	font-size: 20px; 
	margin-bottom:5%;
	opacity:.3;
	padding: 8px 32px 8px 12px;	height: 62px;
	border: 2px solid white;
	border-radius: 50px;
	background-color:white;
	outline:none;
  }

.softbox:focus{
	outline:none;
	border: 4px solid white;
	box-shadow: 0 0 10px white;
  }

.softbtn{
	position: absolute;
	font-size: 40px;color: white;
	background-color: transparent;
	border:none;right: 1%;
	margin-top:.5%;outline: none;
	padding: 4px;
  }
`

export default Wrapper