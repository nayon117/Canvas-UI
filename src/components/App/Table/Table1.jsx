import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Table1 = () => {
  return (
    <CodeBox stringCode={`<div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-100 whitespace-nowrap">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Role
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Joined At
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
        <tr>
          <td className="px-6 py-4 text-sm text-[#333]">John Doe</td>
          <td className="px-6 py-4 text-sm text-[#333]">
            john@example.com
          </td>
          <td className="px-6 py-4 text-sm text-[#333]">Admin</td>
          <td className="px-6 py-4 text-sm text-[#333]">2022-05-15</td>
          <td className="px-6 py-4 text-sm text-[#333]">
            <button className="text-blue-500 hover:text-blue-700 mr-4">
              Edit
            </button>
            <button className="text-red-500 hover:text-red-700">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 text-sm text-[#333]">Jane Smith</td>
          <td className="px-6 py-4 text-sm text-[#333]">
            jane@example.com
          </td>
          <td className="px-6 py-4 text-sm text-[#333]">User</td>
          <td className="px-6 py-4 text-sm text-[#333]">2022-07-20</td>
          <td className="px-6 py-4 text-sm text-[#333]">
            <button className="text-blue-500 hover:text-blue-700 mr-4">
              Edit
            </button>
            <button className="text-red-500 hover:text-red-700">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 text-sm text-[#333]">Alen doe</td>
          <td className="px-6 py-4 text-sm text-[#333]">
            alen@example.com
          </td>
          <td className="px-6 py-4 text-sm text-[#333]">User</td>
          <td className="px-6 py-4 text-sm text-[#333]">2022-07-21</td>
          <td className="px-6 py-4 text-sm text-[#333]">
            <button className="text-blue-500 hover:text-blue-700 mr-4">
              Edit
            </button>
            <button className="text-red-500 hover:text-red-700">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`} text={`Basic Table`} >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 whitespace-nowrap">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Joined At
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
            <tr>
              <td className="px-6 py-4 text-sm text-[#333]">John Doe</td>
              <td className="px-6 py-4 text-sm text-[#333]">
                john@example.com
              </td>
              <td className="px-6 py-4 text-sm text-[#333]">Admin</td>
              <td className="px-6 py-4 text-sm text-[#333]">2022-05-15</td>
              <td className="px-6 py-4 text-sm text-[#333]">
                <button className="text-blue-500 hover:text-blue-700 mr-4">
                  Edit
                </button>
                <button className="text-red-500 hover:text-red-700">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-[#333]">Jane Smith</td>
              <td className="px-6 py-4 text-sm text-[#333]">
                jane@example.com
              </td>
              <td className="px-6 py-4 text-sm text-[#333]">User</td>
              <td className="px-6 py-4 text-sm text-[#333]">2022-07-20</td>
              <td className="px-6 py-4 text-sm text-[#333]">
                <button className="text-blue-500 hover:text-blue-700 mr-4">
                  Edit
                </button>
                <button className="text-red-500 hover:text-red-700">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-[#333]">Alen doe</td>
              <td className="px-6 py-4 text-sm text-[#333]">
                alen@example.com
              </td>
              <td className="px-6 py-4 text-sm text-[#333]">User</td>
              <td className="px-6 py-4 text-sm text-[#333]">2022-07-21</td>
              <td className="px-6 py-4 text-sm text-[#333]">
                <button className="text-blue-500 hover:text-blue-700 mr-4">
                  Edit
                </button>
                <button className="text-red-500 hover:text-red-700">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </CodeBox>
  );
};
export default Table1;
