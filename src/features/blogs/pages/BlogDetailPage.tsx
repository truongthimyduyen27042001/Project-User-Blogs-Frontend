import { useParams } from "react-router-dom";
import { Card, Typography, List, Avatar, Divider, Tag } from "antd";
import { mockBlogs } from "../../../stores/blog.mock";

const { Title, Paragraph, Text } = Typography;

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = mockBlogs.find((b) => b.id === id);

  if (!blog) return <div>Không tìm thấy thông tin tour!</div>;

  return (
    <div className="bg-gray-50 flex justify-center items-start w-screen overflow-x-hidden" style={{ overflowX: 'hidden' }}>
      <div className="container mx-auto">
        <Card
          cover={<img alt={blog.destination} src={blog.images[0]} style={{ maxHeight: 320, objectFit: "cover" }} />}
          bordered={false}
          className="shadow-lg mb-6"
        >
          <Title level={2}>{blog.destination}</Title>
          <Paragraph type="secondary" className="mb-2">
            {blog.description}
          </Paragraph>
          <Paragraph>
            <Text strong>Chi tiết tour:</Text> {blog.detail}
          </Paragraph>
          <Paragraph>
            <Text strong>Giá dịch vụ:</Text> <Text type="danger" strong>{blog.price.toLocaleString()}₫</Text>
          </Paragraph>
          <Divider />
          <Paragraph>
            <Text strong>Hoạt động với tour guide:</Text>
            <br />
            {blog.activities}
          </Paragraph>
          <Divider />
          <Paragraph>
            <Text strong>Địa điểm du lịch nổi bật:</Text>
            <div className="flex flex-wrap gap-2 mt-2">
              {blog.destinations.map((place, idx) => (
                <Tag color="blue" key={idx}>{place}</Tag>
              ))}
            </div>
          </Paragraph>
        </Card>
        <Card title="Nhận xét của khách hàng" bordered={false} className="shadow">
          <List
            itemLayout="horizontal"
            dataSource={blog.comments}
            locale={{ emptyText: "Chưa có nhận xét nào." }}
            renderItem={comment => (
              <List.Item>
                <List.Item.Meta
                  style={{textAlign: 'left'}}
                  avatar={<Avatar src={comment.user.avatar} />}
                  title={<span>{comment.user.name}</span>}
                  description={comment.content}
                />
                <div style={{ fontSize: 12, color: '#888' }}>{new Date(comment.createdAt).toLocaleString()}</div>
              </List.Item>
            )}
          />
        </Card>
      </div>
    </div>
  );
};

export default BlogDetailPage; 