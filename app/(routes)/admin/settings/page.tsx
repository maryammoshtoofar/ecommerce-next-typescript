import Title from '@/app/_components/base/admin/section-title/section-title';
import Section from '@/app/_components/base/containers/section/section';
import Item from '@/app/_components/widgets/admin/setting-item/setting-item';
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
        <Item component={<FaGears />}>general</Item>
        <Item component={<TbArrowsRightLeft />}>routes</Item>
        <Item component={<FaRegEnvelope />}>email</Item>
        <Item component={<MdOutlineOutlet />}>plugins</Item>
      </SettingsSection>
      <SettingsSection title="content">
        <Item component={<FaRegEdit />}>fields</Item>
        <Item component={<IoNewspaperOutline />}>sections</Item>
        <Item component={<IoMdImages />}>assets</Item>
        <Item component={<BsGlobe />}>globals</Item>
        <Item component={<IoFileTrayStacked />}>categories</Item>
        <Item component={<BsFillTagsFill />}>tags</Item>
      </SettingsSection>
      <SettingsSection title="tools">
        <Item component={<IoMdImages />}>update asset</Item>
        <Item component={<FaRegTrashAlt />}>clear cache</Item>
        <Item component={<FaDatabase />}>backup</Item>
        <Item component={<BsMagic />}>find & replace</Item>
        <Item component={<FaSearch />}>search</Item>
      </SettingsSection>
    </Section>
  );
};

export default Settings;
