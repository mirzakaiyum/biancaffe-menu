import { PDFViewer } from "@/components/PDFViewer";

interface CategoryParams {
    params: {
        section: string;
        category: string;
    };
}

const Category = ({ params }: CategoryParams) => {
    return <PDFViewer section={params.section} category={params.category} />;
};

export default Category;