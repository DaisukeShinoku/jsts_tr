import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const IndexPage: NextPage = () => {
  // useStateを使って状態を管理する
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  // マウンド時に画像を読み込む宣言
  useEffect(() => {
    fetchImage().then((newImage) => {
      setImageUrl(newImage.url);
      setLoading(false);
    });
  }, []);
  // ボタンをクリックしたら画像を読み込む宣言
  const handleClick = async () => {
    setLoading(true);
    const newImage = await fetchImage();
    setImageUrl(newImage.url);
    setLoading(false);
  };
  // ローディング中でなければ画像を表示する
  return (
    <div>
      <button onClick={handleClick}>他のニャンコも見る</button>
      <div>{loading || <img src={imageUrl} />}</div>
    </div>
  );
};

export default IndexPage;

type Image = {
  url: string;
};

const fetchImage = async (): Promise<Image> => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search');
  const images = await res.json();
  console.log(images);
  return images[0];
};
