import Title from '@/app/_components/base/admin/section-title/section-title';
import Section from '@/app/_components/base/containers/section/section';
import SettingItem from '@/app/_components/widgets/admin/setting-item/setting-item';
import SettingsSection from '@/app/_components/widgets/admin/settings-section/settings-section';
import { TbArrowsRightLeft } from 'react-icons/tb';
import {
  FaRegEnvelope,
  FaRegEdit,
  FaRegTrashAlt,
  FaDatabase,
  FaSearch,
} from 'react-icons/fa';
import { MdOutlineOutlet } from 'react-icons/md';
import { FaGears } from 'react-icons/fa6';
import { IoNewspaperOutline, IoFileTrayStacked } from 'react-icons/io5';
import { IoMdImages } from 'react-icons/io';
import { BsGlobe, BsFillTagsFill, BsMagic } from 'react-icons/bs';
const Settings = () => {
  return (
    <Section>
      <Title>settings</Title>
      <SettingsSection title="system">
        <SettingItem component={<FaGears />}>general</SettingItem>
        <SettingItem component={<TbArrowsRightLeft />}>routes</SettingItem>
        <SettingItem component={<FaRegEnvelope />}>email</SettingItem>
        <SettingItem component={<MdOutlineOutlet />}>plugins</SettingItem>
      </SettingsSection>
      <SettingsSection title="content">
        <SettingItem component={<FaRegEdit />}>fields</SettingItem>
        <SettingItem component={<IoNewspaperOutline />}>sections</SettingItem>
        <SettingItem component={<IoMdImages />}>assets</SettingItem>
        <SettingItem component={<BsGlobe />}>globals</SettingItem>
        <SettingItem component={<IoFileTrayStacked />}>categories</SettingItem>
        <SettingItem component={<BsFillTagsFill />}>tags</SettingItem>
      </SettingsSection>
      <SettingsSection title="tools">
        <SettingItem component={<IoMdImages />}>update asset</SettingItem>
        <SettingItem component={<FaRegTrashAlt />}>clear cache</SettingItem>
        <SettingItem component={<FaDatabase />}>backup</SettingItem>
        <SettingItem component={<BsMagic />}>find & replace</SettingItem>
        <SettingItem component={<FaSearch />}>
          search
        </SettingItem>
      </SettingsSection>
    </Section>
  );
};

export default Settings;
