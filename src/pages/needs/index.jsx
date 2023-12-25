import NeedsFeed from "@/components/needs/needFeed/NeedsFeed";
import { getNeeds } from "@/redux-store/features/needsFeedSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const NeedsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.needsPosts.needsPosts);
  const page = useSelector((state) => state.needsPosts.page);
  console.log(page);
  useEffect(() => {
    dispatch(getNeeds(page));
  }, [page]);
  console.log(posts);
  return (
    <div className="min-h-[85dvh]">
      <NeedsFeed />
    </div>
  );
};
export default NeedsPage;
