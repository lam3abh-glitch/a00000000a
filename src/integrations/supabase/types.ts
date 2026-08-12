export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      articles: {
        Row: {
          content_ar: string | null
          content_en: string | null
          country_id: string | null
          created_at: string
          excerpt_ar: string | null
          excerpt_en: string | null
          hero_image: string | null
          id: string
          is_featured: boolean | null
          kind: string
          slug: string
          source_url: string | null
          title_ar: string
          title_en: string
        }
        Insert: {
          content_ar?: string | null
          content_en?: string | null
          country_id?: string | null
          created_at?: string
          excerpt_ar?: string | null
          excerpt_en?: string | null
          hero_image?: string | null
          id?: string
          is_featured?: boolean | null
          kind: string
          slug: string
          source_url?: string | null
          title_ar: string
          title_en: string
        }
        Update: {
          content_ar?: string | null
          content_en?: string | null
          country_id?: string | null
          created_at?: string
          excerpt_ar?: string | null
          excerpt_en?: string | null
          hero_image?: string | null
          id?: string
          is_featured?: boolean | null
          kind?: string
          slug?: string
          source_url?: string | null
          title_ar?: string
          title_en?: string
        }
        Relationships: [
          {
            foreignKeyName: "articles_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
        ]
      }
      cities: {
        Row: {
          content_ar: string | null
          content_en: string | null
          country_id: string
          created_at: string
          hero_image: string | null
          id: string
          name_ar: string
          name_en: string
          slug: string
        }
        Insert: {
          content_ar?: string | null
          content_en?: string | null
          country_id: string
          created_at?: string
          hero_image?: string | null
          id?: string
          name_ar: string
          name_en: string
          slug: string
        }
        Update: {
          content_ar?: string | null
          content_en?: string | null
          country_id?: string
          created_at?: string
          hero_image?: string | null
          id?: string
          name_ar?: string
          name_en?: string
          slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "cities_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
        ]
      }
      continents: {
        Row: {
          created_at: string
          description_ar: string | null
          description_en: string | null
          hero_image: string | null
          id: string
          name_ar: string
          name_en: string
          slug: string
          sort_order: number | null
        }
        Insert: {
          created_at?: string
          description_ar?: string | null
          description_en?: string | null
          hero_image?: string | null
          id?: string
          name_ar: string
          name_en: string
          slug: string
          sort_order?: number | null
        }
        Update: {
          created_at?: string
          description_ar?: string | null
          description_en?: string | null
          hero_image?: string | null
          id?: string
          name_ar?: string
          name_en?: string
          slug?: string
          sort_order?: number | null
        }
        Relationships: []
      }
      countries: {
        Row: {
          capital_ar: string | null
          capital_en: string | null
          continent_id: string
          created_at: string
          currency: string | null
          flag_emoji: string | null
          hero_image: string | null
          id: string
          intro_ar: string | null
          intro_en: string | null
          is_featured: boolean | null
          iso2: string | null
          latitude: number | null
          longitude: number | null
          name_ar: string
          name_en: string
          slug: string
          source_url: string | null
        }
        Insert: {
          capital_ar?: string | null
          capital_en?: string | null
          continent_id: string
          created_at?: string
          currency?: string | null
          flag_emoji?: string | null
          hero_image?: string | null
          id?: string
          intro_ar?: string | null
          intro_en?: string | null
          is_featured?: boolean | null
          iso2?: string | null
          latitude?: number | null
          longitude?: number | null
          name_ar: string
          name_en: string
          slug: string
          source_url?: string | null
        }
        Update: {
          capital_ar?: string | null
          capital_en?: string | null
          continent_id?: string
          created_at?: string
          currency?: string | null
          flag_emoji?: string | null
          hero_image?: string | null
          id?: string
          intro_ar?: string | null
          intro_en?: string | null
          is_featured?: boolean | null
          iso2?: string | null
          latitude?: number | null
          longitude?: number | null
          name_ar?: string
          name_en?: string
          slug?: string
          source_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "countries_continent_id_fkey"
            columns: ["continent_id"]
            isOneToOne: false
            referencedRelation: "continents"
            referencedColumns: ["id"]
          },
        ]
      }
      itineraries: {
        Row: {
          country_id: string | null
          created_at: string
          days: Json | null
          duration_days: number | null
          hero_image: string | null
          id: string
          slug: string
          source_url: string | null
          summary_ar: string | null
          summary_en: string | null
          title_ar: string
          title_en: string
        }
        Insert: {
          country_id?: string | null
          created_at?: string
          days?: Json | null
          duration_days?: number | null
          hero_image?: string | null
          id?: string
          slug: string
          source_url?: string | null
          summary_ar?: string | null
          summary_en?: string | null
          title_ar: string
          title_en: string
        }
        Update: {
          country_id?: string | null
          created_at?: string
          days?: Json | null
          duration_days?: number | null
          hero_image?: string | null
          id?: string
          slug?: string
          source_url?: string | null
          summary_ar?: string | null
          summary_en?: string | null
          title_ar?: string
          title_en?: string
        }
        Relationships: [
          {
            foreignKeyName: "itineraries_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
        ]
      }
      translation_cache: {
        Row: {
          created_at: string
          hash: string
          id: string
          lang: string
          source: string
          translated: string
        }
        Insert: {
          created_at?: string
          hash: string
          id?: string
          lang: string
          source: string
          translated: string
        }
        Update: {
          created_at?: string
          hash?: string
          id?: string
          lang?: string
          source?: string
          translated?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
