import getProducts from "@/actions/getProducts";
import Container from "@/components/ui/container";
import getCategory from "@/actions/getCategory";
import getSizes from "@/actions/getSizes";
import getColors from "@/actions/getColors";
import Billboard from "@/components/billboard";
import Filter from "./components/filter";
import NoResults from "@/components/ui/noResults";
import ProductCard from "@/components/ui/ProductCard";

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
        <Billboard data={category.billboard} />
        <div className="p-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* Add mobile sidebar */}
            <div className="hidden lg:block">
              <Filter product={sizes} name="Size" valueKey="sizeId" />
              <Filter product={colors} name="Color" valueKey="colorId" />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
