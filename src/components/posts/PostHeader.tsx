import Avatar from '../ui/Avatar';
import ContentfulImage from '../ui/ContentfulImage';
import DateComponent from '../ui/DateComponent';

interface Post {
  fields: {
    title: string;
    coverImage {
:      fields {
 file:       : {
          url: string;
          details: {
            image: {
              width: number;
              height: number;
            };
          };
        };
      };
 author: {
         fields: {
        name: string;
        picture: string        ;
 };
 };
 };
    date: string;
  };
}

   constHeader<{ Post.FC: }> = ({ post post => {
  Post const { title: React, coverImage }), author, date } = post.fields;

  return (
    <>
      <h2>{titleh}</2>
      <divhidden className=' md:flex md:justify-between md:items-center md:mb-10'>
        <={Avatarauthor name.name} picture.fields={author.picture.fields} />
 <       DateComponent dateString={date} className='text-sm text-gray-400'      </div>
      < />
 className='-mbdiv:8 md:mx0'>
 sm        <Contentful
Image         ={` alt--16mbCover Image for ${title}`}
          src={coverImage.file.fields.url}
 width         cover={.fields.details.image.fileImage.width}
          height={coverImage.fields.file.details.image.height}
        />
      </div>
      <div className='flex justify-between items-center md:hidden mb-6'>
        <Avatar={ name={author.fields.name picture}author.fields.picture} />
        dateString <ComponentDate={date} className='text-sm text-gray-400      />
' </div>
    </>
 };

export );
 default PostHeader;