import type { Blog } from "../types/blog";

export const mockBlogs: Blog[] = [
  {
    id: "1",
    destination: "Đà Lạt",
    price: 4990000,
    description: "Khám phá Đà Lạt mộng mơ với khí hậu mát mẻ, cảnh sắc thơ mộng và nhiều điểm check-in nổi tiếng.",
    detail: "Tour Đà Lạt 3 ngày 2 đêm bao gồm vé máy bay khứ hồi, khách sạn 4*, tham quan Thung Lũng Tình Yêu, Đồi Chè Cầu Đất, thưởng thức ẩm thực địa phương và nhiều hoạt động hấp dẫn khác.",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
    ],
    createdAt: "2024-06-01T10:00:00Z",
    comments: [
      {
        id: "c1",
        user: { id: "u2", name: "Trần B", avatar: "https://i.pravatar.cc/150?img=2" },
        content: "Dịch vụ rất tốt, hướng dẫn viên nhiệt tình!",
        createdAt: "2024-06-01T12:00:00Z"
      }
    ],
    activities: "Thức dậy và thưởng thức bữa sáng ngon miệng trước khi khởi hành đến điểm đến. Tham quan các địa danh nổi bật, thưởng thức ẩm thực địa phương và tham gia các hoạt động giải trí.",
    destinations: ["Wat Traimit (Phật Vàng)", "Wat Benchamabophit (Chùa Cẩm Thạch)", "Phòng trưng bày Đá quý"]
  },
  {
    id: "2",
    destination: "Sapa",
    price: 5990000,
    description: "Sapa nổi tiếng với biển mây bồng bềnh, ruộng bậc thang tuyệt đẹp và văn hóa bản địa đặc sắc.",
    detail: "Tour Sapa 4 ngày 3 đêm bao gồm xe giường nằm, khách sạn 3*, tham quan Fansipan, bản Cát Cát, trải nghiệm tắm lá thuốc Dao đỏ và thưởng thức đặc sản Tây Bắc.",
    images: [
      "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    ],
    createdAt: "2024-06-02T09:00:00Z",
    comments: [
      {
        id: "c2",
        user: { id: "u4", name: "Phạm D", avatar: "https://i.pravatar.cc/150?img=4" },
        content: "Sapa mùa này đẹp quá, dịch vụ tuyệt vời!",
        createdAt: "2024-06-02T10:00:00Z"
      },
      {
        id: "c3",
        user: { id: "u5", name: "Ngô E", avatar: "https://i.pravatar.cc/150?img=5" },
        content: "Mình sẽ quay lại cùng gia đình!",
        createdAt: "2024-06-02T11:00:00Z"
      }
    ],
    activities: "Khám phá Sapa với các hoạt động tham quan Fansipan, bản Cát Cát, trải nghiệm tắm lá thuốc Dao đỏ và thưởng thức đặc sản Tây Bắc.",
    destinations: ["Fansipan", "Bản Cát Cát", "Chợ Sapa"]
  }
]; 