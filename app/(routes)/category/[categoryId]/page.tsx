import getProducts from "@/actions/getProducts";
import Container from "@/components/ui/container";
import getCategory from "@/actions/getCategory";
import getSizes from "@/actions/getSizes";
import getColors from "@/actions/getColors";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const category = await getCategory(params.categoryId);
  const sizes = await getSizes();
  const colors = await getColors();

  return (
    <div className="bg-white">
      <Container>
        <div></div>
      </Container>
    </div>
  );
};

export default CategoryPage;
