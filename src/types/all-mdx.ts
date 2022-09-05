import Edge from "./edge";

interface AllMdx {
  edges: Array<Edge>;
  group: Array<{
    fieldValue: string;
    totalCount: number;
  }>;
}

export default AllMdx;
