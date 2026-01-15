import styls from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styls.container}>
        <dl>
            <dt className={styls.title}>ページが見つかりませんでした</dt>
            <dd className={styls.text}>あなたがアクセスしようとしたページは存在しません。
            <br />
            urlを再度ご確認ください。
            </dd>
        </dl>
    </div>
    );
    }   