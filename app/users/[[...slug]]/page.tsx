import User from "@/components/User";
import Users from "@/components/Users";

const page = ({ params }: { params: { slug?: string[] } }) => {
  const { slug } = params;
  if (!slug) {
    return <Users />;
  }
  console.log(slug, "slug");

  return (
    <div>
      nextjs dynamic routes
      <User slug={slug} />
    </div>
  );
};

export default page;
