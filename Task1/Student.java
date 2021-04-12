import java.util.*;
class Student
{
    public static void main(String args[])
    {
        Scanner rv=new Scanner(System.in);
        ArrayList<String> name=new ArrayList<>();
        ArrayList<String> rollno=new ArrayList<>();
        ArrayList<Integer> english=new ArrayList<>();
        ArrayList<Integer> hindi=new ArrayList<>();
        ArrayList<Integer> science=new ArrayList<>();
        ArrayList<Integer> maths=new ArrayList<>();
        ArrayList<Integer> social_science=new ArrayList<>();
        ArrayList<Double> avg=new ArrayList<>();
        ArrayList<Double> avg2=new ArrayList<>();
        while(rv.hasNext())
        {
            String x,y;
            System.out.println("Enter name");
            x=rv.next();
            System.out.println("Enter rollno");
            y=rv.next();
            System.out.println("Enter marks");
            int m,n,o,p,q;
            m=rv.nextInt();
            n=rv.nextInt();
            o=rv.nextInt();
            p=rv.nextInt();
            q=rv.nextInt();
            name.add(x);
            rollno.add(y);
            english.add(m);
            hindi.add(n);
            maths.add(o);
            science.add(p);
            social_science.add(q);
            avg.add((m+n+o+p+q)/5.0);
            avg2.add((m+n+o+p+q)/5.0);
        }
        Collections.sort(avg, Collections.reverseOrder());
        
        System.out.println(name.get(avg2.indexOf(avg.get(0)))+" "+name.get(avg2.indexOf(avg.get(1)))+" "+name.get(avg2.indexOf(avg.get(2))));
    }
}