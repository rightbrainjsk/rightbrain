import { Tree, TreeNode } from 'react-organizational-chart';
import styled from "styled-components";
import ContactPageIcon from '@mui/icons-material/ContactPage';

const StyledNode = styled.div`
  &:before{
    content:'';
    position:absolute;
    left:0;
    top:0;
    width:8px;
    height:100%;
    background:rgb(17, 82, 147);
  }
  position:relative;
  box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12);
  min-height: 40px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:8px;
  overflow:hidden;
`;
const OverStyledNode = styled(StyledNode)`
  &:before {
    background:red;
  }
`
function Team() {
    return (
        <>
            {/* https://www.npmjs.com/package/react-organizational-chart */}
            <Tree label={<div>RightBrain</div>}>
                <TreeNode label={<OverStyledNode>CX컨설팅그룹<br /></OverStyledNode>}>
                    <TreeNode label={<div>...</div>} />
                </TreeNode>
                <TreeNode label={<OverStyledNode>가치UX그룹</OverStyledNode>}>
                    <TreeNode label={<div>...</div>} />
                    <TreeNode label={<StyledNode><ContactPageIcon />퍼블리싱</StyledNode>} />
                </TreeNode>
                <TreeNode label={<OverStyledNode>가치디자인그룹</OverStyledNode>}>
                    <TreeNode label={<div>...</div>} />
                </TreeNode>
                <TreeNode label={<OverStyledNode>가치경영기획실</OverStyledNode>}>
                    <TreeNode label={<div>...</div>} />
                </TreeNode>
            </Tree>
            라이트브레인은 3개의 수행 조직이 있습니다.<br />
            CX컨설팅그룹 - UX리서처<br />
            가치UX그룹 - UI/UX기획자, 퍼블리셔<br />
            가치디자인그룹 - GUI디자이너<br />
        </>
    )
}

export default Team
