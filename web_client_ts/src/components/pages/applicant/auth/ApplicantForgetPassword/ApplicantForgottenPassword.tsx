import FormDashboard from '../../../../shared/FormDashboard/FormDashboard'
import ForgotPasswordForm from './ApplicantForgottenPasswordForm/ApplicantForgottenPasswordForm'
import { ForgetPasswordContent } from '../../../../shared/Content/Content'
import { forgetPass } from '../../../../../assets/images'

const ApplicantForgottenPassword = () => {
  return (
    <FormDashboard image={forgetPass} child={<ForgotPasswordForm />} HeadingContent={<ForgetPasswordContent/>}/>
  )
}

export default ApplicantForgottenPassword