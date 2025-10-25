import { Clock, CheckCircle } from "lucide-react";

// Dummy data for demonstration
const dummyResults = [
  { id: 1, name: "أحمد محمد علي", time: "09:15:23" },
  { id: 2, name: "فاطمة حسن", time: "09:15:45" },
  { id: 3, name: "عمر خالد", time: "09:16:12" },
  { id: 4, name: "سارة عبدالله", time: "09:16:34" },
  { id: 5, name: "محمد أحمد", time: "09:17:01" },
  { id: 6, name: "نور الدين", time: "09:17:28" },
  { id: 7, name: "ليلى إبراهيم", time: "09:17:55" },
  { id: 8, name: "يوسف عمر", time: "09:18:19" },
];

const ResultsView = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full animate-fade-in">
        {/* Expired Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-muted/50 mb-6">
            <Clock className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-3">
            انتهت صلاحية الرمز
          </h2>
          <p className="text-xl text-muted-foreground">
            تم إغلاق جلسة الحضور بنجاح
          </p>
        </div>

        {/* Results Table */}
        <div className="glass rounded-3xl overflow-hidden shadow-3d">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 border-b border-border">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                نتائج الحضور
              </h3>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/30">
                  <th className="px-6 py-4 text-right text-sm font-bold text-foreground">
                    #
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-foreground">
                    اسم الطالب
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-foreground">
                    وقت المسح
                  </th>
                </tr>
              </thead>
              <tbody>
                {dummyResults.map((result, index) => (
                  <tr
                    key={result.id}
                    className="border-t border-border hover:bg-muted/20 transition-colors"
                  >
                    <td className="px-6 py-4 text-muted-foreground">
                      {result.id}
                    </td>
                    <td className="px-6 py-4 text-foreground font-semibold">
                      {result.name}
                    </td>
                    <td className="px-6 py-4 text-primary font-mono">
                      {result.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Footer */}
          <div className="bg-muted/30 p-6 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">إجمالي الحضور:</span>
              <span className="text-2xl font-bold text-primary">
                {dummyResults.length} طالب
              </span>
            </div>
          </div>
        </div>

        {/* New Session Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-4 text-lg font-bold text-primary-foreground bg-gradient-to-r from-primary to-secondary rounded-xl hover:scale-105 transition-all duration-300 neon-glow"
          >
            بدء جلسة جديدة
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsView;
