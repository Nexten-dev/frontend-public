import Input from '@/shared/ui/input';
import BoldText from '@/shared/ui/bold-text';
import HintText from '@/shared/ui/hint-text';
import Textarea from '@/shared/ui/textarea';
import Button from '@/shared/ui/button';
import RowInput from './RowInput';
import styles from '../styles.module.scss';
import Checkbox from '@/shared/ui/checkbox';


const ProfileSettings = () => {
  return (
    <form className={styles["form"]}>

      <RowInput>
        <div className={styles.avatar}></div>
        <div className={styles.username}>
          UserName
          <Button className={styles["change-avatar"]} view='secondary'>Change profile photo</Button>
        </div>
      </RowInput>

      <RowInput>
        <BoldText className={styles["side"]}>Name</BoldText>
        <Input/>
        <HintText>
          Help people discover your account by using the name you're known by: either your full name, nickname, or business name.
            <br/>
          You can only change your name twice within 14 days.
        </HintText>
      </RowInput>

      <RowInput>
        <BoldText className={styles["side"]}>Username</BoldText>
        <Input/>
        <HintText>In most cases, you'll be able to change your username back to upvox_ for another 14 days.</HintText>
      </RowInput>


      <RowInput>
        <BoldText className={styles["side"]}>Website</BoldText>
        <Input value="Website" disabled={true}/>
        <HintText>Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio.</HintText>
      </RowInput>

      <RowInput>
        <BoldText className={styles["side"]}>Bio</BoldText>
        <Textarea/>
        <HintText>0 / 150</HintText>
      </RowInput>


      <RowInput className={styles["row--xs"]}>
        <BoldText className={styles["side"]}></BoldText>
        <BoldText className='clr-gray'>Personal information</BoldText>
        <HintText className='clr-gray'>Provide your personal information, even if the account is used for a business, a pet or something else. This won't be a part of your public profile.</HintText>
      </RowInput>

      <RowInput>
        <BoldText className={styles["side"]}>Email</BoldText>
        <Input/>
      </RowInput>

      <RowInput>
        <BoldText className={styles["side"]}>Phone number</BoldText>
        <Input/>
      </RowInput>

      <RowInput>
        <BoldText className={styles["side"]}>Gender</BoldText>
        <Input/>
      </RowInput>


      <RowInput>
        <BoldText className={styles["side"]}>Show account suggestions on profiles</BoldText>
        <Checkbox className="txt-bold">Choose whether people can see similar account suggestions on your profile, and whether your account can be suggested on other profiles. <span className="clr-primary">[?]</span></Checkbox>
      </RowInput>


      <RowInput>
        <span></span>
        <div className={styles.btns}>
          <Button>Submit</Button>
          <Button view='secondary'>Temporarily deactivate my account</Button>
        </div>
      </RowInput>
    </form>
  );
};

export default ProfileSettings;