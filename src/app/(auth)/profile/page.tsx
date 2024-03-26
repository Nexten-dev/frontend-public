import Panel from '@/widgets/panel';
import Stories from '@/widgets/stories';
import Content from '@/widgets/content';

export default function ProfilePage() {
  return (
    <main className='app-body'>
      <Panel />
      <Stories />
      <Content />
    </main>
  );
}
