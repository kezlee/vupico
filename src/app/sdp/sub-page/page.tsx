
import ContentLeftRight from '../../components/ContentLeftRight';
import { SdpContentEmpowering, sdpContentHow } from '../../constant';
import ContentHeader from '../../components/ContentHeader';


const SubPage = () => (
  <>
    <section className="container mx-auto px-6 text-[--primary] pt-20 pb-20 text-[16px]">
      <ContentHeader title={`SDP Sub Page`} />
      <ContentLeftRight content={SdpContentEmpowering}></ContentLeftRight>
    </section>
  </>
)

export default SubPage;