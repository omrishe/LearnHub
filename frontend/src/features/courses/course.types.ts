/* interfaces / types declaration file
*/


/*ahh i want to make this all into a class so much!
fyi if anyone reading this it will cause more issues since it will break useState and useEffect
when you change a value it will not register it as a new object meaning react wont see a change 
*/

export interface Course {
    id: string;                  // Unique course ID
    title: string;               // Course title
    description: string;         // Full description
    level: CourseLevel;          // Difficulty level
    durationMinutes: number;     // Total duration in minutes
    createdAt: string;           // ISO date string
    updatedAt?: string;          // Optional last updated date
    tags?: string[];             // Optional tags for filtering/search
  }

  export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';

  //this function supposed to match the backend response
  export interface CourseApiResponse {
    id: string;
    title: string;
    description: string;
    level: string;              // Might need mapping to CourseLevel
    duration_minutes: number;
    created_at: string;
    updated_at?: string;
    tags?: string[];
  }

